import { collection, config, fields, singleton } from '@keystatic/core';

// TODO: set this to your GitHub repo once it exists, e.g. 'your-username/portfolio'.
// Only accounts with write access to this repo can save from the admin.
const GITHUB_REPO = 'YOUR-GITHUB-USERNAME/portfolio';

export default config({
  // Local: edit files on disk, no login. Production: sign in with GitHub,
  // every save is a commit, and Vercel redeploys.
  storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'github', repo: GITHUB_REPO },

  ui: {
    brand: { name: 'Portfolio admin' },
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      columns: ['year', 'featured'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        summary: fields.text({
          label: 'Summary',
          description: 'One sentence. Shown in the Mission Select preview.',
          multiline: true,
          validation: { isRequired: true },
        }),
        year: fields.integer({
          label: 'Year',
          defaultValue: new Date().getFullYear(),
          validation: { isRequired: true },
        }),
        role: fields.text({ label: 'Role', validation: { isRequired: true } }),
        stack: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Stack',
          itemLabel: props => props.value,
        }),
        link: fields.url({ label: 'Live site' }),
        repo: fields.url({ label: 'Source code' }),
        cover: fields.image({
          label: 'Cover image',
          description: 'A real screenshot. Leave empty to use a placeholder photo.',
          directory: 'public/covers',
          publicPath: '/covers/',
        }),
        order: fields.integer({
          label: 'Order',
          description: 'Lower numbers come first.',
          defaultValue: 0,
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: 'Featured on homepage',
          description: 'Up to 5 featured projects show in Mission Select. All projects list on /missions.',
          defaultValue: false,
        }),
        content: fields.markdoc({ label: 'Write-up', extension: 'md' }),
      },
    }),
  },

  singletons: {
    profile: singleton({
      label: 'Profile',
      path: 'src/data/profile',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Name', validation: { isRequired: true } }),
        yearLine: fields.text({
          label: 'Title screen line',
          description: 'Shown above your name, e.g. "Portfolio".',
        }),
        role: fields.text({ label: 'Role' }),
        mission: fields.text({ label: 'Mission' }),
        status: fields.text({ label: 'Status' }),
        greeting: fields.text({
          label: 'Greeting',
          description: 'Typed out in the HELLO window. 30 characters max so it fits on phones.',
          validation: { length: { max: 30 } },
        }),
        training: fields.object(
          {
            degree: fields.text({ label: 'Degree' }),
            school: fields.text({ label: 'School' }),
            years: fields.text({ label: 'Years' }),
          },
          { label: 'Training log' },
        ),
        tools: fields.array(
          fields.object({
            slug: fields.text({
              label: 'Icon slug',
              description: 'From simpleicons.org, e.g. "typescript".',
            }),
            name: fields.text({ label: 'Name' }),
          }),
          { label: 'Loadout (tools)', itemLabel: props => props.fields.name.value },
        ),
        skills: fields.array(fields.text({ label: 'Skill' }), {
          label: 'Skill tree',
          itemLabel: props => props.value,
        }),
        email: fields.text({ label: 'Email' }),
        socials: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            href: fields.url({ label: 'URL' }),
          }),
          { label: 'Social links', itemLabel: props => props.fields.label.value },
        ),
      },
    }),
  },
});
