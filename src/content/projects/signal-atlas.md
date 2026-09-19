---
title: "Signal Atlas"
summary: "A real-time observability layer that turns noisy event streams into a single legible map of system health."
year: 2025
role: "Lead engineer: architecture, streaming pipeline, frontend"
stack: ["TypeScript", "Rust", "ClickHouse", "WebSockets", "D3"]
link: "https://example.com"
repo: "https://github.com/example/signal-atlas"
order: 1
featured: true
---

## Placeholder copy, replace this

Signal Atlas ingests several hundred thousand events per second and collapses
them into a small number of meaningful indicators. The hard part was not the
throughput; it was deciding what *not* to show.

### What I built

- A Rust ingest service with backpressure-aware batching into ClickHouse
- A query planner that pre-aggregates the twelve views that matter and lazily
  computes the rest
- A frontend that renders the whole fleet as one continuously updating diagram

### Outcome

Mean time to detect a regression dropped from tens of minutes to under a minute.
Replace this section with your real metrics and a link to a write-up.
