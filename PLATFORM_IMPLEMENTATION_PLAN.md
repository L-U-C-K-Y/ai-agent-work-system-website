# JobDone AI

## Website build progress

Last updated: 2026-06-05

- Read the platform specification and used it as the source of truth for public-site positioning, terminology, product sections, and demo story.
- Reviewed the sister JobDone public site for tone and brand relationship: clean B2B SaaS, product feature sections, demo-led CTA language, and operational buyer framing.
- Generated a visual concept for the new JobDone AI public website with a command-center hero, AI Desks, work loop, Finance Desk demo, governance/audit, deployment templates, and mobile layout.
- Ran the requested shadcn init command: `pnpm dlx shadcn@latest init --preset b1Ymqw2ZE --base base --template next --pointer`. The CLI wrote `components.json` and installed dependencies; pnpm stopped on its non-interactive ignored-builds guard for `msw`, then `pnpm approve-builds '!msw'` was used to make the workspace install non-interactive and repeatable.
- Replaced the boilerplate Luckysoft homepage with the JobDone AI public-facing website, focused on the company and "The AI Agent Work System", not the internal app platform.
- Updated brand metadata, navigation, footer copy, shadcn utility support, and the generated concept asset used for Open Graph preview.
- Direction update from user: the service is in closed preview and the site should prioritize marketing and investor positioning over technical platform detail.
- Direction update from user: do not mention investors or preview customers in visible copy; treat it like a live premium SaaS site with "Request Access" replacing signup.
- Expanded the visual system with new Image Gen concepts for multiple pages and brand assets, then saved liquid/frosted glass assets into `public/images/jobdone-ai/generated/`.
- Revised the site toward a premium frosted/liquid-glass SaaS look with more whitespace, generated abstract hero art, page-based navigation, and live public pages for Home, AI Desks, Technology, Demo, and Request Access.
- Generated three improved homepage concepts and selected `public/images/jobdone-ai/concepts/homepage-spacious-v3.png` for implementation.
- Implemented the V3 homepage direction: spacious hero, liquid-glass system visual, value strip, four featured AI Desk cards, technology layer diagram, Finance + Inventory story strip, trust/evidence row, and dark final Request Access CTA.
- Fidelity revision complete after user feedback: tightened the homepage toward `homepage-spacious-v3.png` with desktop layout preserved at the concept width, concept-matched navigation labels, no hero Request Access CTA, reduced section density, compact glass cards, a six-column footer, and production screenshots captured at `output/playwright/jobdone-ai-full-page-desktop.png` and `output/playwright/jobdone-ai-mobile.png`.
- Verification complete after latest revision: `pnpm lint` and `pnpm build` pass. Production server QA is running at `http://localhost:3004`.
- New redesign direction started: shifted the public site toward a Neon-inspired dark technical aesthetic for a collaborative human + AI agent work system, with homepage graphics showing channels, AI coworkers, rich work cards, automations, direct knowledge citations, governed record databases, and approval packets together.
- Latest QA for the coworking redesign: `pnpm lint` passes, `pnpm build` passes, dev server runs at `http://localhost:3005`, and screenshots were captured at `output/playwright/jobdone-coworking-redesign-desktop.png` and `output/playwright/jobdone-coworking-redesign-mobile.png`.
- Shadcn/theme alignment pass complete: read the app repo shadcn tokens from `/Users/lucky/Developer/github/L-U-C-K-Y/ai-agent-work-system-app/apps/web/app/globals.css`, aligned this site to the same `--primary: #206ae9` and chart palette variables, added shadcn `button`, `card`, and `badge` components, routed the marketing link button through the shadcn button variants, replaced stale Luckysoft/File to Markdown/Splitpop public copy with JobDone AI workspace content, and converted product detail routes into Finance, Inventory, People, Support, Product, and Revenue workspace pages. Verification: `pnpm lint` and `pnpm build` pass.
- Neon-style comparison pass complete: reviewed `https://neon.tech/` for current dark technical SaaS composition cues, then added shadcn Base UI `NavigationMenu`, `Sheet`, and `Separator`; replaced the custom header with a shadcn mega-menu header, added a compact infrastructure/status strip above the homepage hero, converted visible coworking cards to shadcn `Card`/`Badge` composition, fixed the Base UI link-button warning with `nativeButton={false}`, and verified with `pnpm lint`, `pnpm build`, and screenshot `output/playwright/jobdone-neon-shadcn-home-desktop-clean.png`.
- Secondary page fidelity pass complete: expanded Workspaces, Platform, and Use cases with richer Neon-like product graphics and shadcn `Card`/`Badge` composition. Platform now includes inspectable work graph and runtime trace sections; Use cases now includes outcome trace and reusable operating patterns; Workspaces now includes a workspace runtime matrix. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-neon-platform-rich-desktop.png`, `output/playwright/jobdone-neon-usecases-rich-desktop.png`, and `output/playwright/jobdone-neon-workspaces-rich-mobile.png`.
- Request/legal polish pass complete: added shadcn Base UI `Input`, `Textarea`, `Select`, `Label`, and `Field`; refactored the Request Access form to use shadcn field/control composition; restyled Privacy, Terms, and Not Found with the same dark technical card treatment; removed old unused product legal link helpers. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-shadcn-contact-desktop-final.png`, `output/playwright/jobdone-shadcn-contact-mobile.png`, and `output/playwright/jobdone-legal-shadcn-privacy-desktop.png`.
- Email API pass complete: replaced the mailto-only Request Access flow with `app/api/contact/route.ts`, a Next.js API route that validates contact submissions and sends email through Resend's HTTP API when `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` are configured. The form now submits via `fetch("/api/contact")` with sending, sent, and error states; `.env.example` documents the required email settings. Verification: `pnpm lint` and `pnpm build` pass, API validation returns `400` for invalid input and `503` with a visitor-safe message when email env vars are not configured, and screenshot `output/playwright/jobdone-api-email-contact-desktop.png` was captured.
- Neon-style richness pass complete: rechecked `https://neon.tech/` for product-map, console/status, and technical storytelling cues; expanded the shadcn mega menu to all six workspace routes, pointed footer workspace links to their real pages, and added a Request Access control-plane graphic with pipeline, status counters, and API-style console copy. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-neon-rich-contact-desktop.png`, `output/playwright/jobdone-neon-rich-contact-mobile.png`, and `output/playwright/jobdone-neon-rich-header-footer-home.png`.
- Imagegen visual experiment pass complete: copied four preview-only generated Neon-style raster assets into `public/images/jobdone-ai/experiments/`, added `ExperimentVisual`, and swapped Home, Workspaces, Platform, Use cases, and the Home primitives divider to image-backed graphics while preserving the old React-built visuals behind `useImagegenExperimentVisuals` switches for fast rollback. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-imagegen-swap-home-desktop.png`, `output/playwright/jobdone-imagegen-swap-home-mobile.png`, `output/playwright/jobdone-imagegen-swap-workspaces-desktop.png`, `output/playwright/jobdone-imagegen-swap-platform-desktop.png`, and `output/playwright/jobdone-imagegen-swap-usecases-desktop.png`.
- Homepage hero refinement complete: removed the grid and blue blur from the hero background, switched the desktop hero from the over-dark blended artwork to the cleaner framed work-graph candidate on a plain black field, and kept the image larger than the right column with responsive mobile behavior intact. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-imagegen-hero-black-wide.png`, `output/playwright/jobdone-imagegen-hero-black-home-desktop.png`, and `output/playwright/jobdone-imagegen-hero-black-home-mobile.png`.
- Platform hero refinement complete: removed the blue blur behind the `/vision` hero, set the section to the same plain near-black treatment, and enlarged the shared text/image hero layout so the work-graph image spans beyond the right column without borders. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-vision-hero-black-large-wide.png` and `output/playwright/jobdone-vision-hero-black-large-desktop.png`.
- Shared hero image sizing pass complete: increased the visual footprint for all imagegen hero surfaces, including Home, Workspaces, Platform, and Use cases. Home and Platform now extend farther past the right column, Workspaces uses the wider shared text/image ratio, and Use cases uses a wider hero visual band. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-shared-hero-images-larger-home.png`, `output/playwright/jobdone-shared-hero-images-larger-workspaces.png`, `output/playwright/jobdone-shared-hero-images-larger-platform.png`, and `output/playwright/jobdone-shared-hero-images-larger-usecases.png`.
- Page-specific image mapping pass complete: added `neon-coworking-console-wide.png` from the generated candidate set and remapped hero visuals so major pages do not repeat the same raster asset. Home now uses the coworking console, Workspaces uses the workspace room graph, Platform uses the work-card graph, Use cases uses the command-console workflow, and the abstract glass primitive stays as the Home primitives divider. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-page-specific-images-home.png`, `output/playwright/jobdone-page-specific-images-workspaces.png`, `output/playwright/jobdone-page-specific-images-platform.png`, and `output/playwright/jobdone-page-specific-images-usecases.png`.
- Edge-to-edge hero asset pass complete: regenerated the Home hero image with a pure black background and minimal internal padding, saved it as `public/images/jobdone-ai/experiments/neon-home-edge-to-edge-black.png`, removed the remaining image wrapper chrome, and widened Home, Workspaces, Platform, and Use cases hero visuals so they extend further beyond their columns. Verification: `pnpm lint` and `pnpm build` pass, with screenshots `output/playwright/jobdone-home-regenerated-edge-to-edge-black.png`, `output/playwright/jobdone-workspaces-edge-to-edge-larger.png`, `output/playwright/jobdone-platform-edge-to-edge-larger.png`, and `output/playwright/jobdone-usecases-edge-to-edge-larger.png`.

## The AI Agent Work System

### Full end-to-end platform specification for product, engineering, forward deployment, marketing, sales, and implementation

Version: 1.0
Working document type: Product, technical, UX, implementation, and go-to-market specification

---

## Naming decision

Use:

# **JobDone AI: The AI Agent Work System**

Not:

```text
JobDone AI: The AI Agents Work System
```

Reason: **“AI Agent”** works better as a compound adjective. It describes the type of work system. “AI Agents Work System” sounds grammatically awkward and less polished.

Use this hierarchy:

```text
Company / product brand:
JobDone AI

Category / positioning:
The AI Agent Work System

Customer-facing packages:
AI Desks

Technical foundation:
Agent Work Framework
Business Agent Harness
Tool Gateway
Work Engine
Skill Library
Memory Layer

Tagline:
From inbox to done, with AI agents.
```

Recommended full positioning sentence:

> **JobDone AI is the AI Agent Work System for businesses. It lets companies deploy AI agents that process real work from email, forms, documents, and business tools, with structured records, approvals, memory, and audit built in.**

---

# 1. Executive summary

JobDone AI is building **The AI Agent Work System**: a platform for deploying AI agents into real business workflows.

The platform is not just a chatbot, not just an agent framework, and not just a no-code automation tool. It is a complete operational system that lets businesses delegate work to AI agents while keeping humans in control.

The customer-facing product is:

> **AI agents and AI desks that process business work from emails, forms, documents, chat, APIs, and tools.**

The underlying company asset is:

> **A reusable agent work framework that provides intake, work items, records, tools, memory, skills, approvals, audit, evaluations, and dashboards.**

The core loop of the system is:

```text
Input
→ Work Item
→ Structured Records
→ Agent Run
→ Tool Calls
→ Approval if needed
→ Output / System Update
→ Audit Event
→ Memory Update
→ Dashboard Metric
```

The first recommended MVP wedge is:

```text
AI Finance Desk + AI Inventory Manager
```

The first flagship demo should be:

```text
1. A supplier emails an invoice for five laptops.
2. Finance AI receives the invoice.
3. Finance AI extracts supplier, amount, date, invoice number, due date, VAT, and line items.
4. Finance AI creates an invoice work item.
5. The system detects that the invoice contains physical assets.
6. Inventory AI creates draft asset records.
7. The agent asks for missing serial numbers.
8. Human approves the invoice.
9. Assets are moved into pending assignment.
10. Dashboard shows invoice status, asset status, approvals, missing information, and audit trail.
```

This demo proves the real platform value:

```text
Email intake
Document extraction
Structured records
Work item lifecycle
Agent execution
Tool governance
Human approval
Cross-agent handoff
Memory
Audit
Dashboards
```

---

# 2. Company thesis

## 2.1 Core thesis

Businesses will not deploy AI agents at scale through generic chatbots. They need a reliable work system for delegating real business tasks to AI.

JobDone AI provides that work system.

The product enables:

```text
Business inputs
→ AI-assisted work execution
→ structured business state
→ governed tool actions
→ human approval
→ auditable completion
```

## 2.2 Customer thesis

> **Deploy AI agents that handle recurring business work from email, documents, forms, and tools, while keeping every task, approval, record, and action visible.**

## 2.3 Investor thesis

> **JobDone AI is building the operating layer for AI business work. Each customer deployment compounds reusable process templates, agent packages, skill packages, tool integrations, approval policies, memory patterns, and evaluations.**

## 2.4 Engineering thesis

> **Every AI agent action that affects a business system must go through a governed execution path: permissioned, risk-classified, validated, approved if necessary, executed, logged, and linked to a work item.**

---

# 3. Product category and positioning

## 3.1 Primary category

```text
The AI Agent Work System
```

This is short, distinctive, and broad enough.

It communicates:

```text
AI Agent:
The product belongs to the agent category.

Work:
It is about real business tasks, not chat only.

System:
It is complete, operational, and usable by businesses.
```

## 3.2 Supporting category language

Use these phrases depending on audience.

### Customer-facing

```text
AI agents for real business work
AI desks for finance, inventory, HR, marketing, support, and product operations
From inbox to done, with AI agents
```

### Manager-facing

```text
A control center for AI-powered business operations
Track every task, approval, exception, and completed action
```

### Admin / IT-facing

```text
Govern what agents can access, which tools they can use, and which actions need approval
```

### Developer / FDE-facing

```text
A framework for deploying business agents with skills, tools, memory, records, approvals, and audit
```

### Investor-facing

```text
The operating layer for AI business workers
A reusable business agent harness
AI workforce infrastructure for business operations
```

## 3.3 Recommended tagline

```text
From inbox to done, with AI agents.
```

Alternative taglines:

```text
AI agents that get business work done.
Turn business inputs into completed work.
Your AI work system for business operations.
AI agents, governed from intake to done.
```

## 3.4 Recommended website hero

```text
The AI Agent Work System

Deploy AI agents that turn emails, documents, forms, and business tools into completed, tracked, and auditable work.
```

Supporting copy:

```text
JobDone AI gives every AI agent the infrastructure it needs to work safely in your business: inboxes, tasks, records, tools, memory, approvals, audit trails, and dashboards.
```

Primary CTA:

```text
Deploy your first AI Desk
```

Secondary CTA:

```text
See the Finance Desk demo
```

---

# 4. Product principles

These principles should guide product, engineering, UX, sales, and implementation.

```text
1. Work items are the core unit of business value.
2. Departments are the main business packaging layer.
3. Agents are workers, not the system of record.
4. Chat is an interface, not the source of truth.
5. Every business action goes through the Tool Gateway.
6. Risky actions require approval by default.
7. Agents have explicit identities and never impersonate humans.
8. Memory is scoped, source-linked, reviewable, and deletable.
9. Business records belong to organisations, departments, and processes, not isolated private agent silos.
10. Skills are reusable platform assets.
11. Processes are reusable workflow assets.
12. Forward deployment must create productised templates, not only custom work.
13. The platform must show measurable ROI.
14. The customer must be able to answer: what did the agent do, why, using which data, and who approved it?
15. The user experience should be department-first, work-first, approval-visible, and agent-aware.
```

---

# 5. Core product model

The product has two visible layers and one underlying technical layer.

## 5.1 Customer-facing layer

Customers buy:

```text
AI Finance Desk
AI Inventory Desk
AI Marketing Desk
AI Product Ops Desk
AI HR Desk
AI Support Desk
AI Sales Ops Desk
```

These are packaged AI teams that solve real business workflows.

## 5.2 Operational layer

Business users interact with:

```text
Departments
Work items
Approvals
Records
Agents
Knowledge
Dashboards
```

## 5.3 Technical foundation

The reusable platform contains:

```text
Agent runtime
Work engine
Tool gateway
Skill package system
Memory and context engine
Business records layer
Approval and autonomy system
Audit and observability
Forward deployment console
```

---

# 6. Target customers

## 6.1 Primary initial customer profile

Ideal first customers:

```text
20 to 300 employees
Recurring operational work
Email-heavy workflows
Limited internal automation capacity
Founder/ops-led decision-making
Need better visibility and control
Comfortable adopting AI with human approval
```

Strong segments:

```text
SMEs
Scaleups
Service businesses
Software companies
Asset-heavy businesses
Operations-heavy businesses
Finance/admin-heavy businesses
```

## 6.2 Early buyer personas

```text
Founder / CEO
COO
Head of Operations
Finance lead
IT lead
Product lead
HR lead
Office manager
```

## 6.3 Later buyer personas

```text
CIO
CFO
CHRO
Head of Shared Services
Head of Business Transformation
Enterprise Automation Lead
```

---

# 7. User roles

## 7.1 Regular user

Examples:

```text
Employee
Finance team member
Support user
Marketing user
HR assistant
Product team member
Operations employee
```

Can:

```text
Submit requests
Upload documents
Forward emails
Chat with agents
View relevant work
Comment
Provide missing information
Correct extracted fields
Review drafts
Approve if authorised
Search records they can access
```

Cannot:

```text
Install tools
Change agent permissions
Configure MCP servers
Access credentials
Change production skills
View all audit logs
Edit organisation policies
```

## 7.2 Manager / process owner

Examples:

```text
Finance lead
Operations manager
HR manager
Marketing manager
Product owner
Head of support
```

Can:

```text
View department dashboards
Manage work queues
Assign work
Prioritise work
Approve actions
Review agent output
Resolve exceptions
Adjust simple thresholds
Review analytics
```

## 7.3 Business admin

Can:

```text
Create departments
Create agents from templates
Create process templates
Configure approval rules
Manage users and roles
Configure record schemas
Manage forms
View department audit
Publish process changes
```

## 7.4 Technical admin / IT

Can:

```text
Connect integrations
Manage credentials
Configure MCP servers
Configure webhooks
Manage tool policies
Review tool-call logs
Configure security settings
Manage data retention
Manage SSO later
```

## 7.5 Forward-deployed AI engineer

This is a first-class role.

Can:

```text
Set up customer tenants
Run process discovery
Configure departments
Adapt process templates
Install and customise skills
Configure agents
Connect tools with customer approval
Create custom tools
Create custom record schemas
Debug failed runs
Run evaluations
Prepare pilots
Train customer admins
Package repeated learnings into reusable templates
```

Constraints:

```text
Production access is logged.
Sensitive data access is scoped and time-limited.
Production changes require customer admin approval.
Reusable templates must be sanitised before becoming global assets.
FDEs cannot view raw secrets.
```

## 7.6 Compliance / security user

Can:

```text
Inspect audit logs
Review data access
Review tool calls
Export evidence
Review permission changes
Configure retention policies
Review high-risk actions
```

---

# 8. Core terminology

## 8.1 Organisation

A customer tenant.

Contains:

```text
Users
Roles
Departments
Agents
Processes
Records
Tools
Integrations
Credentials
Knowledge
Memory
Audit logs
Billing
Settings
```

## 8.2 Department

A business team or AI desk.

Examples:

```text
Finance Desk
Inventory Desk
Marketing Desk
Product Desk
HR Desk
Support Desk
Sales Ops Desk
```

A department contains:

```text
Agents
Processes
Work queues
Records
Knowledge
Memory scopes
Dashboards
Approval policies
Members
```

## 8.3 Agent

An AI worker with identity, role, instructions, skills, tools, memory access, and permissions.

Examples:

```text
Finance Clerk AI
Invoice Processing AI
Inventory Intake AI
Marketing Producer AI
Product Ops AI
HR Coordinator AI
```

## 8.4 Agent Package

A reusable definition for deploying a type of agent.

Contains:

```text
Role
Instructions
Default skills
Default tools
Default permissions
Memory scopes
Escalation policy
Evaluation suite
Default dashboards
```

## 8.5 Skill Package

A reusable procedural capability.

Examples:

```text
invoice-extraction
supplier-matching
asset-registration
brand-compliant-slide-generation
bug-triage
contract-draft-preparation
```

A skill can include:

```text
Instructions
Schemas
Scripts
References
Templates
Validators
Examples
Evaluation cases
Required tools
Allowed tools
Risk metadata
```

## 8.6 Process Template

A repeatable business workflow.

Examples:

```text
Process Supplier Invoice
Register New Asset
Create Marketing Asset
Triage Bug Report
Prepare Contract Draft
```

Contains:

```text
Workflow stages
Input schema
Record schema
Default agents
Skills
Tools
Approval policies
Outputs
KPIs
Escalations
```

## 8.7 Work Item

A concrete unit of business work.

Examples:

```text
Invoice from Supplier AG
Register five laptops
Create Q3 sales flyer
Triage Sentry error
Prepare employment contract draft
```

The work item is the core operational object.

## 8.8 Run

One execution attempt by an agent.

Contains:

```text
Agent version
Process version
Skill versions
Input context
Tool calls
Approvals
Outputs
Errors
Cost
Trace
```

## 8.9 Tool

A callable capability that lets an agent read data, write data, generate artifacts, call APIs, use connectors, invoke MCP servers, or call another agent.

## 8.10 Business Record

A structured object.

Examples:

```text
Invoice
Supplier
Receipt
Asset
Device
Campaign
Bug
Feature Request
Employee
Contract Draft
```

## 8.11 Knowledge

Approved source material.

Examples:

```text
Finance SOP
HR policy
Brand guidelines
Contract template
Product documentation
Support macro
```

## 8.12 Memory

Learned operational context.

Example:

```text
Supplier AG invoices are usually assigned to cost centre IT-Software.
```

## 8.13 Artifact

A file or generated output.

Examples:

```text
PDF
Invoice attachment
Generated contract draft
Slide deck
Report
Image
CSV export
Evidence package
```

## 8.14 Approval

A human decision gate for a proposed agent action.

---

# 9. High-level architecture

```text
Inputs
  Email / Forms / Webhooks / Chat / API / Files / External Events
        ↓
Intake Gateway
  Normalise, classify, authenticate, deduplicate, attach files
        ↓
Work Engine
  Work items, statuses, boards, assignments, comments, SLAs
        ↓
Business Records
  Tables, fields, relationships, forms, record history
        ↓
Agent Runtime
  Runs, planning, context, skills, memory retrieval, handoffs
        ↓
Tool Gateway
  Tool catalog, MCP, functions, connectors, credentials, permissions
        ↓
Policy & Approval Layer
  Risk classification, autonomy levels, approvals, guardrails
        ↓
Execution Layer
  Internal tools, APIs, MCP calls, sandbox, browser, document generation
        ↓
Validation Layer
  Schema validation, business rules, output checks, eval hooks
        ↓
Persistence
  Records, artifacts, memory, events, traces, audit logs
        ↓
Dashboards & Reports
  Work completed, cycle time, cost, quality, time saved, ROI
```

---

# 10. Platform modules

The platform should be built around these modules.

```text
1. Identity and Tenant Module
2. Intake Gateway
3. Work Engine
4. Business Records and Tables
5. Agent Runtime
6. Skill Package System
7. Tool Gateway
8. MCP and Connector Layer
9. Approval and Autonomy System
10. Memory and Context Engine
11. Knowledge Base
12. Artifact and Document Layer
13. Observability, Audit, and Evaluation
14. UI Application
15. Admin / Builder Studio
16. Forward Deployment Console
17. Security, Permissions, and Compliance
18. Billing and Usage Metering
```

---

# 11. Core object model

## 11.1 Conceptual hierarchy

```text
Organisation
→ Department
→ Process Template
→ Work Item
→ Agent Run
→ Tool Call
→ Record / Artifact / Approval / Audit Event
```

## 11.2 User-facing hierarchy

```text
Department
→ Work
→ Approval
→ Record
→ Agent
```

## 11.3 Technical object list

```text
Organisation
User
Role
Group
Department
Agent
AgentVersion
AgentPackage
SkillPackage
SkillVersion
ProcessTemplate
ProcessVersion
WorkItem
WorkItemStatus
WorkItemComment
Conversation
Message
Run
RunStep
ToolDefinition
ToolVersion
ToolCall
ToolPolicy
MCPServer
Integration
Credential
ApprovalRequest
ApprovalPolicy
BusinessRecordType
BusinessRecord
FieldDefinition
ViewDefinition
FormDefinition
Artifact
KnowledgeDocument
MemoryEntry
MemoryScope
Event
AuditLog
EvaluationSuite
EvaluationCase
EvaluationRun
Dashboard
Metric
Notification
WebhookEndpoint
Environment
Deployment
```

---

# 12. Data ownership model

The platform uses a hybrid system-of-record model.

## 12.1 JobDone AI owns

```text
Work items
Process state
Agent runs
Tool calls
Approvals
Audit logs
Memory
Knowledge references
Artifacts
Operational records
Configuration
Dashboards
Evaluations
```

## 12.2 External systems may own

```text
Final accounting records
Payment execution
Payroll
HRIS employee master records
CRM accounts/opportunities
ERP inventory master
GitHub issues
Jira/Linear issues
Production code
Legal document execution
```

## 12.3 Record ownership modes

Every record type can be configured as one of:

```text
Native:
Source of truth is JobDone AI.

Synced:
JobDone AI stores local copy and syncs with external system.

External reference:
JobDone AI stores only reference, metadata, and operational state.

Derived:
Record is generated from other sources and can be regenerated.

Draft:
Record is a proposed object pending approval or sync.
```

---

# 13. Intake Gateway

## 13.1 Purpose

The Intake Gateway converts external inputs into structured work items, records, conversations, files, or events.

## 13.2 P0 intake types

```text
Email inbox
File upload
Manual work item creation
Web form
Webhook/API
Attachment ingestion
```

## 13.3 P1 intake types

```text
Slack / Microsoft Teams
Scheduled recurring triggers
Advanced deduplication
Multi-channel conversation stitching
```

## 13.4 P2 intake types

```text
WhatsApp
Telegram
Discord
Voice
Browser-based intake
```

## 13.5 Intake lifecycle

```text
Receive input
Authenticate source
Parse metadata
Extract attachments
Classify input
Detect duplicate or related work
Identify department
Identify process
Create or update work item
Attach conversation/files
Extract initial fields
Assign agent or triage queue
Emit audit event
Notify relevant users
```

## 13.6 Intake event object

```text
IntakeEvent
- id
- organisation_id
- source_type
- source_id
- received_at
- sender
- recipients
- subject
- body
- attachments
- raw_payload_reference
- classification
- department_id
- process_id
- work_item_id
- dedupe_key
- status
- audit_event_id
```

---

# 14. Work Engine

## 14.1 Purpose

The Work Engine tracks business work as structured, visible, auditable work items.

## 14.2 Work item object

```text
WorkItem
- id
- organisation_id
- department_id
- process_id
- title
- description
- source
- source_ref
- requester
- status
- priority
- risk_level
- assigned_agent_id
- human_owner_id
- due_date
- sla_policy_id
- extracted_fields
- related_record_ids
- file_ids
- conversation_ids
- run_ids
- approval_ids
- artifact_ids
- event_ids
- created_at
- updated_at
- completed_at
```

## 14.3 Default lifecycle

```text
Received
→ Triage
→ Need Info
→ Ready
→ Planned
→ In Progress
→ Waiting Approval
→ Executed
→ Quality Check
→ Done
```

Processes can override this lifecycle.

## 14.4 Required views

```text
Kanban board
List view
Calendar view
Detail page
Filtered queue
My work
Team work
Blocked work
Completed work
```

---

# 15. Business Records and Tables

## 15.1 Purpose

Provide structured business state that agents and humans can inspect, update, validate, and report on.

## 15.2 Record type object

```text
BusinessRecordType
- id
- organisation_id
- department_id
- name
- description
- ownership_mode
  - native
  - synced
  - external_reference
  - derived
  - draft
- fields
- relationships
- validation_rules
- views
- forms
- permissions
- created_at
- updated_at
```

## 15.3 Record object

```text
BusinessRecord
- id
- organisation_id
- record_type_id
- fields
- status
- source
- external_ref
- created_by
- created_by_type
- updated_by
- confidence
- validation_status
- linked_work_items
- linked_artifacts
- change_history
- created_at
- updated_at
```

## 15.4 Field types

```text
Text
Long text
Number
Currency
Date
Datetime
Boolean
Enum/dropdown
Multi-select
File
Relation
User
Agent
Status
JSON/object
URL
Email
Phone
Formula later
Computed relation later
```

## 15.5 AI field provenance

Every AI-created or AI-edited field should support:

```text
Value
Source file
Source page
Source text span
Extracted by agent
Run ID
Confidence label
Human review status
Last human editor
Change history
```

Example:

```text
Amount: CHF 1,240.00
Source: invoice.pdf, page 1
Status: Extracted by AI, high confidence
Reviewed: no
```

---

# 16. Agent Runtime

## 16.1 Purpose

Run AI agents safely and durably against work items, chat interactions, scheduled tasks, and event triggers.

## 16.2 Agent object

```text
Agent
- id
- organisation_id
- department_id
- name
- description
- role
- identity
- email_address
- status
- agent_package_id
- current_version_id
- allowed_processes
- allowed_tools
- memory_scopes
- knowledge_sources
- autonomy_level
- approval_policy_ids
- escalation_owner_id
- created_at
- updated_at
```

## 16.3 Agent version object

```text
AgentVersion
- id
- agent_id
- version
- instructions
- model_config
- runtime_config
- skill_versions
- tool_policy_versions
- memory_policy_version
- process_versions
- created_by
- published_at
- status
  - draft
  - sandbox
  - staging
  - production
  - archived
```

## 16.4 Run lifecycle

```text
Queued
→ Context Building
→ Planning
→ Tool Selection
→ Tool Execution
→ Waiting Approval, optional
→ Resumed
→ Validation
→ Output
→ Work Item Update
→ Memory Proposal
→ Completed / Failed / Cancelled
```

## 16.5 Run object

```text
Run
- id
- organisation_id
- department_id
- agent_id
- agent_version_id
- process_id
- process_version_id
- work_item_id
- trigger_type
- status
- started_at
- completed_at
- duration_ms
- model
- runtime
- skills_loaded
- memory_used
- tools_called
- approvals_requested
- output
- error
- cost
- trace_id
- created_at
```

## 16.6 Runtime requirements

### P0

```text
Agent identity
Agent runs
Run queue
Tool calls
Structured outputs
Work item updates
Pause for approval
Run log
Cost tracking
```

### P1

```text
Retries
Handoffs
Scheduled runs
Multi-agent workflows
Failure recovery
Replay
```

### P2

```text
Autonomous planning across multiple work items
Workload optimisation
Agent self-improvement proposals
```

---

# 17. Skill Package System

## 17.1 Purpose

Skills package reusable procedural capabilities.

A skill is not just a prompt. It is a deployable business capability.

## 17.2 Suggested skill package structure

```text
skill-name/
├── SKILL.md
├── skill.yaml
├── schemas/
├── scripts/
├── references/
├── templates/
├── validators/
├── evals/
└── policy/
```

## 17.3 Skill object

```text
SkillPackage
- id
- name
- description
- category
- owner
- scope
  - global
  - organisation
  - department
  - agent
- version
- required_tools
- allowed_tools
- forbidden_tools
- input_schema
- output_schema
- risk_level
- approval_requirements
- references
- templates
- scripts
- validators
- eval_suite_id
- status
  - draft
  - certified
  - deprecated
```

## 17.4 Skill types

```text
Instruction Skill:
Instructions only.

Business Skill:
Instructions + schemas + templates + references.

Executable Skill:
Business skill + scripts + validators.

Certified Skill:
Executable skill + evals + security review + versioning.
```

## 17.5 Example skills

```text
invoice-extraction
supplier-matching
duplicate-invoice-detection
missing-receipt-follow-up
bookkeeping-draft-preparation
asset-registration
serial-number-validation
warranty-tracking
brand-compliant-slide-generation
campaign-draft-generation
bug-triage
feature-request-clustering
contract-draft-preparation
policy-question-answering
```

## 17.6 Skill governance

```text
Global skills require internal review.
Customer-specific skills can be created by FDEs.
Executable skills require sandboxing.
Production skill changes require versioning.
High-risk skills require evaluations before publishing.
```

---

# 18. Tool Gateway

## 18.1 Purpose

The Tool Gateway governs all business actions performed by agents.

It is the contract between AI reasoning and business action.

```text
Reasoning is flexible.
Tool execution is governed.
```

## 18.2 Tool types

```text
Internal platform tool
Function tool
MCP tool
Hosted connector tool
Customer API tool
Agent-as-tool
Shell/sandbox tool
Browser/computer tool
Document generation tool
```

## 18.3 Tool call lifecycle

```text
Discover
→ Select
→ Authorise
→ Prepare arguments
→ Validate arguments
→ Risk-check
→ Request approval if needed
→ Execute
→ Validate output
→ Persist result
→ Update work item / records
→ Log audit event
→ Feed trace/eval data
```

## 18.4 Tool definition object

```text
ToolDefinition
- id
- name
- namespace
- title
- description
- version
- provider
- type
  - internal_function
  - mcp_tool
  - connector
  - agent_tool
  - shell_tool
  - browser_tool
  - document_tool
- input_schema
- output_schema
- examples
- required_credentials
- required_scopes
- data_access_class
  - no_customer_data
  - customer_metadata
  - customer_content
  - financial_data
  - employee_data
  - confidential_data
- side_effect_class
  - read_only
  - draft_only
  - internal_write
  - external_write
  - irreversible_action
- risk_level
  - low
  - medium
  - high
  - critical
- default_approval_policy
- allowed_agents
- allowed_processes
- allowed_departments
- allowed_tenants
- rate_limits
- timeout_ms
- retry_policy
- idempotency_key_strategy
- sandbox_profile
- logging_policy
- data_retention_policy
- validation_policy
- rollback_strategy
```

## 18.5 Tool call object

```text
ToolCall
- id
- organisation_id
- department_id
- process_id
- work_item_id
- run_id
- parent_tool_call_id
- agent_id
- tool_id
- tool_version
- namespace
- input_arguments
- input_argument_hash
- data_sources_used
- credential_id
- credential_scope
- risk_level
- side_effect_class
- approval_policy_id
- approval_request_id
- status
- started_at
- completed_at
- duration_ms
- output
- output_hash
- output_schema_validation
- error
- retry_count
- audit_event_ids
- trace_id
```

## 18.6 Tool risk taxonomy

### Low-risk tools

```text
search_records
read_work_item
summarise_document
classify_email
extract_pdf_text
read_inventory_record
read_github_issue
```

### Medium-risk tools

```text
draft_email
create_internal_task
update_non_sensitive_record
create_invoice_draft
create_asset_draft
create_marketing_asset_draft
```

### High-risk tools

```text
send_external_email
post_accounting_entry
create_supplier
change_asset_owner
create_contract_draft_with_salary
publish_marketing_content
update_customer_record
```

### Critical tools

```text
execute_payment
change_supplier_bank_details
send_employment_contract
terminate_employee_access
deploy_production_code
delete_business_records
```

## 18.7 Tool policy object

```text
ToolPolicy
- id
- tool_id
- organisation_id
- department_id
- process_id
- agent_id
- autonomy_level
- allowed
- require_approval
- approval_role
- max_amount
- allowed_record_types
- allowed_external_domains
- allowed_oauth_scopes
- denied_arguments
- data_redaction_rules
- business_hours_only
- audit_level
```

## 18.8 Tool search

Agents should not receive every tool schema at once.

Tool discovery should work like this:

```text
Tool Catalog
→ searchable by namespace, process, department, skill, record type, risk
→ context engine loads relevant namespaces
→ agent requests concrete tool definitions
→ gateway filters by policy
→ only approved tools enter model context
```

---

# 19. MCP and Connector Layer

## 19.1 Purpose

Support external systems and MCP servers, but always wrap them in JobDone AI governance.

MCP should be an integration mechanism, not the entire safety layer.

## 19.2 MCP server object

```text
MCPServer
- id
- organisation_id
- name
- description
- type
  - remote_http
  - streamable_http
  - stdio
  - hosted_connector
- url
- command
- args
- environment
- auth_type
- credential_id
- owner
- trust_level
- approved_by
- allowed_departments
- allowed_agents
- allowed_processes
- allowed_tools
- denied_tools
- status
- last_tool_list_refresh_at
- tool_list_hash
```

## 19.3 MCP trust levels

```text
Trust Level 0: Unknown third-party
- read-only only
- no sensitive data
- approval required
- full logging

Trust Level 1: Known third-party
- limited read/write
- approval for writes
- logged data sharing

Trust Level 2: Official vendor server
- allowed with scoped credentials
- approval based on action risk

Trust Level 3: Customer-owned server
- trusted inside tenant boundary
- still policy-controlled

Trust Level 4: Internal platform server
- platform-controlled
- full audit and validation
```

## 19.4 MCP requirements

### P0

```text
MCP server registry
Discover tools
Import discovered tools into Tool Catalog
Allow/deny tools
Credential association
Tool-call logging
Approval handling
```

### P1

```text
MCP resources support
MCP prompt support
Tool-list refresh notifications
Per-process MCP scope
Per-agent MCP scope
MCP data-sharing log
```

### P2

```text
Customer MCP marketplace
MCP certification
Automatic risk classification
Managed private MCP runners
```

---

# 20. Approval and Autonomy System

## 20.1 Autonomy levels

```text
Level 0: Observe only
Level 1: Analyse and suggest
Level 2: Draft for approval
Level 3: Execute low-risk actions
Level 4: Execute within policy thresholds
Level 5: Fully autonomous within defined process
```

## 20.2 Default autonomy

MVP default:

```text
Level 2 for most workflows.
Level 3 only for low-risk internal actions.
Level 4/5 disabled for finance, HR, legal, payments, external publishing, and production code.
```

## 20.3 Approval object

```text
ApprovalRequest
- id
- organisation_id
- department_id
- work_item_id
- run_id
- tool_call_id
- agent_id
- requested_action
- risk_level
- input_arguments
- expected_effect
- exact_payload
- evidence_summary
- related_records
- approver_role
- approver_user_id
- status
  - pending
  - approved
  - rejected
  - edited
  - expired
  - cancelled
- approved_at
- rejected_at
- edited_arguments
- comments
- created_at
```

## 20.4 Approval UI must show

```text
What the agent wants to do
Why it wants to do it
Which work item it belongs to
Which data it used
Which system will be changed
Whether the action is reversible
Exact output/payload
Risk level
Approve / Reject / Edit / Ask agent
```

## 20.5 Approval policy examples

```text
New supplier requires finance lead approval.
Invoice above CHF 1,000 requires manager approval.
Bank detail change requires finance lead approval.
Employment contract requires HR approval.
Marketing publication requires marketing manager approval.
Production deployment requires engineering lead approval.
```

---

# 21. Memory and Context Engine

## 21.1 Purpose

Build the right context for each agent run and manage long-term memory safely.

## 21.2 Storage types

```text
Structured database
Vector index
File/artifact store
Event log
Human-readable memory notes
Conversation summaries
```

## 21.3 Context assembly

For every run, the context engine should consider:

```text
Current work item
Process template
Agent role
Relevant skills
Relevant tools
Tool permissions
Memory scopes
Knowledge sources
Related records
Files/artifacts
Conversation history
Approval policies
Risk level
Human comments
Previous runs
```

## 21.4 Memory scopes

```text
Organisation Memory
Department Memory
Agent Memory
Process Memory
Work Item Memory
Record Memory
Customer/Supplier/Employee Memory
Knowledge Base Memory
Artifact Memory
```

## 21.5 Memory entry object

```text
MemoryEntry
- id
- organisation_id
- scope_type
  - organisation
  - department
  - agent
  - process
  - work_item
  - record
  - customer
  - supplier
  - employee
- scope_id
- statement
- source_type
- source_id
- confidence
- review_status
  - proposed
  - approved
  - rejected
  - archived
- created_by
- created_by_type
- last_used_at
- retention_policy
- deleted_at
```

## 21.6 Memory write policy

```text
Low-risk private memory:
Agent can write, visible to admin.

Shared department memory:
Agent can propose, human approves.

High-risk process memory:
Requires review before being used in future actions.

Sensitive memory:
Restricted by permission and retention policy.
```

## 21.7 Memory UX principle

Do not show raw vector chunks as the default UI.

Show memory as understandable statements:

```text
Supplier AG usually sends monthly invoices around CHF 1,200.

Scope:
Finance Department

Source:
5 approved invoice work items

Confidence:
High

Actions:
Approve, edit, archive, delete
```

---

# 22. Knowledge Base

## 22.1 Purpose

Store authoritative source material that agents can use.

Knowledge is different from memory.

```text
Knowledge:
Approved source material.

Memory:
Learned operational context.
```

## 22.2 Knowledge document object

```text
KnowledgeDocument
- id
- organisation_id
- department_id
- title
- type
  - SOP
  - policy
  - template
  - brand_guideline
  - product_doc
  - contract_template
  - support_macro
- owner_id
- approval_status
- version
- file_id
- extracted_text
- embeddings_ref
- access_scope
- used_by_agents
- last_reviewed_at
- created_at
- updated_at
```

## 22.3 Knowledge rules

```text
Knowledge is authoritative.
Knowledge should have owners.
Important knowledge should have review dates.
Agents should cite knowledge when using it for decisions.
Knowledge changes should be versioned.
```

---

# 23. Artifact and Document Layer

## 23.1 Purpose

Manage source files and generated outputs.

## 23.2 Artifact object

```text
Artifact
- id
- organisation_id
- department_id
- work_item_id
- record_id
- type
  - source_file
  - generated_document
  - email_draft
  - report
  - slide_deck
  - image
  - export
  - evidence
- file_ref
- title
- version
- created_by
- created_by_type
- source_run_id
- approval_status
- metadata
- created_at
```

## 23.3 Required capabilities

### P0

```text
File storage
Attachment handling
PDF extraction
Generated text documents
Artifact linking
```

### P1

```text
Document templates
PDF export
Slide generation
Version history
Review comments
```

### P2

```text
Advanced design generation
Brand-aware visual generation
Multi-format publishing
```

---

# 24. Observability, Audit, and Evaluation

## 24.1 Activity vs audit

Activity is for business users.

```text
Human-readable operational timeline.
```

Audit is for admins, technical users, and compliance.

```text
Immutable technical/compliance event log.
```

## 24.2 Event object

```text
Event
- id
- organisation_id
- actor_type
  - user
  - agent
  - system
  - integration
  - fde
- actor_id
- event_type
- work_item_id
- record_id
- run_id
- tool_call_id
- approval_id
- before
- after
- metadata
- created_at
```

## 24.3 Audit requirements

### P0

```text
Audit events
Run logs
Tool-call logs
Approval logs
Basic cost tracking
Configuration changes
```

### P1

```text
Evaluation cases
Quality ratings
Human correction capture
Failure analytics
```

### P2

```text
Regression testing
Automated eval pipelines
Process improvement suggestions
```

## 24.4 Evaluation suite object

```text
EvaluationSuite
- id
- name
- target_type
  - agent
  - skill
  - process
  - tool
- cases
- grading_method
- required_pass_rate
- last_run_at
- status
```

## 24.5 Evaluation case object

```text
EvaluationCase
- id
- suite_id
- input
- expected_output
- expected_tool_calls
- forbidden_tool_calls
- required_approvals
- grading_rubric
- tags
```

---

# 25. Security, permissions, and compliance

## 25.1 P0 requirements

```text
Tenant isolation
User roles
Agent permissions
Tool permissions
Credential vault
Audit logs
Basic data retention
```

## 25.2 P1 requirements

```text
Record-level permissions
Memory access rules
Department isolation
Retention policies
SSO
Data export/delete
```

## 25.3 P2 requirements

```text
Customer-managed keys
Advanced compliance workflows
VPC/single-tenant
Advanced DLP
Fine-grained field-level permissions
```

## 25.4 Permission dimensions

Permissions should be evaluated across:

```text
Organisation
Department
Process
Agent
Tool
Record type
Record
Field
Memory scope
Knowledge document
Artifact
Credential
Environment
```

## 25.5 Credential vault rules

```text
Secrets are never visible in UI after creation.
Credentials are scoped to organisation/department/tool.
Credential usage is logged.
Credential rotation is supported.
Expired credentials disable dependent tools.
FDEs cannot view raw secrets.
```

## 25.6 Data access logging

Every sensitive access should log:

```text
Actor
Data accessed
Purpose
Work item/run
Time
Tool used
Approval, if applicable
```

---

# 26. Environments and deployment lifecycle

## 26.1 Environments

```text
Draft:
Being configured.

Sandbox:
Runs on sample data only.

Staging:
Runs on real-like or selected real data but cannot perform external side effects.

Production:
Runs on real work items with configured permissions.
```

## 26.2 Versioned entities

```text
Agent
Skill
Process
Tool
Approval policy
Memory policy
Schema
Integration config
Dashboard
```

## 26.3 Publishing flow

```text
Edit draft
Run sample tests
Run eval suite
Review permission diff
Review tool/risk diff
Customer admin approval
Publish to production
Monitor
Rollback if needed
```

## 26.4 Run reproducibility

Every production run stores:

```text
Agent version
Skill versions
Process version
Tool versions
Model/runtime version
Approval policy version
Memory policy version
Input references
Output references
```

---

# 27. UI and navigation

## 27.1 UI philosophy

The product should be:

```text
Department-first for navigation.
Work-first for operations.
Approval-visible for trust.
Agent-aware for identity and interaction.
Data-visible for transparency.
Chat-supported, but not chat-dominated.
```

## 27.2 Main sidebar for regular users

```text
Home
My Work
Approvals
Departments
Agents
Records
Knowledge
Reports
```

## 27.3 Main sidebar for managers

```text
Home
Team Work
Approvals
Departments
Agents
Records
Knowledge
Reports
Activity
```

## 27.4 Main sidebar for admins

```text
Home
Departments
Work
Approvals
Agents
Records
Knowledge
Reports
Admin Studio
```

## 27.5 Admin Studio navigation

```text
Overview
Departments
Agents
Processes
Skills
Tools
MCP Servers
Integrations
Credentials
Data Schemas
Memory Scopes
Runs & Traces
Evaluations
Audit
Users & Roles
Organisation Settings
```

---

# 28. Global app shell

Every page should share the same shell.

## 28.1 Left sidebar

Role-aware primary navigation.

## 28.2 Top bar

Contains:

```text
Global search
+ New button
Notifications
Organisation switcher
User profile
Help / command palette
```

## 28.3 Global search

Search across:

```text
Work items
Agents
Departments
Records
Files
Approvals
Knowledge
Memory, if permitted
Audit logs, if permitted
People
```

Example:

```text
Search: Supplier AG

Results:
- Supplier record
- 12 invoice records
- 4 work items
- 2 approvals
- 1 email thread
- 3 memory entries
```

## 28.4 + New button

For regular users:

```text
New work item
Upload document
Ask agent
Submit request
Create record
```

For admins:

```text
New agent
New department
New process
New skill
New tool
New integration
New schema
```

---

# 29. UI page specifications

## 29.1 Home

Purpose:

```text
Show what needs attention now.
```

Sections:

```text
Needs My Attention
Pending Approvals
My Work
Agent Updates
Department Overview
Recent Activity
Quick Actions
```

Cards:

```text
Work items needing attention
Approvals pending
Agent runs in progress
Completed today
Blocked items
Failed runs
```

Quick actions:

```text
Ask an agent
Upload document
Create work item
Submit request
Forward invoice instructions
Create approval
```

## 29.2 My Work

Purpose:

```text
Show all work relevant to the current user.
```

Views:

```text
List
Board
Calendar
Grouped by department
Grouped by status
Grouped by due date
```

Filters:

```text
Assigned to me
Created by me
Waiting on me
Needs approval
Watching
Blocked
Due soon
Completed
```

Work item card shows:

```text
Title
Department
Process
Status
Assigned agent
Human owner
Due date
Risk level
Last activity
```

## 29.3 Approvals

Purpose:

```text
Make human control explicit and easy.
```

Tabs:

```text
Pending
Approved
Rejected
Needs Changes
History
```

Approval card shows:

```text
Agent requesting action
Requested action
Reason
Work item
Data used
Exact payload
Expected effect
Risk level
Reversibility
Approver role
Approve / Reject / Edit / Ask agent
```

## 29.4 Departments directory

Purpose:

```text
Show AI teams and business operating areas.
```

Department card:

```text
Name
Description
Active agents
Open work
Blocked work
Pending approvals
Completed today
Health status
```

---

# 30. Department detail page

Recommended tabs:

```text
Overview
Inbox
Work Board
Approvals
Records
Agents
Knowledge
Activity
Analytics
Settings
```

## 30.1 Department Overview

Shows:

```text
Open work
Blocked work
Pending approvals
Active agents
Recent completions
SLA status
Key metrics
Important alerts
```

Finance examples:

```text
Open invoices
Missing receipts
Invoices awaiting approval
Month-end close status
```

Inventory examples:

```text
Assets missing serial numbers
Unassigned devices
Warranty expirations
Offboarding returns pending
```

## 30.2 Department Inbox

Shows incoming, untriaged, or newly triaged inputs.

Sources:

```text
Emails
Forms
Webhooks
Uploads
Chat requests
System events
```

Actions:

```text
Create work item
Link to existing work item
Assign process
Assign agent
Mark irrelevant
Request missing information
```

## 30.3 Department Work Board

Kanban view of work items.

Finance default stages:

```text
Received
Extracted
Missing Info
Waiting Approval
Ready for Accounting
Completed
```

Inventory default stages:

```text
Detected
Draft Created
Missing Data
Registered
Assigned
In Use
Retired
```

## 30.4 Department Approvals

Department-scoped approval queue.

## 30.5 Department Records

Department-owned tables.

Finance:

```text
Invoices
Suppliers
Receipts
Transactions
Subscriptions
```

Inventory:

```text
Assets
Devices
Assignments
Warranties
Repairs
```

## 30.6 Department Agents

Agent cards:

```text
Agent name
Role
Status
Workload
Autonomy level
Tools enabled
Success rate
Last activity
```

## 30.7 Department Knowledge

Approved department knowledge:

```text
SOPs
Policies
Templates
Guidelines
Playbooks
```

## 30.8 Department Activity

Human-readable event timeline:

```text
Invoice received
Agent extracted fields
Approval requested
Human approved
Draft created
```

## 30.9 Department Analytics

Metrics:

```text
Throughput
Cycle time
Blocked work
Approval bottlenecks
Agent success rate
Human intervention rate
Estimated time saved
Cost per work item
```

## 30.10 Department Settings

Admin-only.

Configure:

```text
Name
Description
Members
Default agents
Default processes
Intake routes
Permissions
Notification rules
Autonomy limits
Dashboard layout
```

---

# 31. Work item detail page

The work item detail page is the most important product surface.

Recommended tabs:

```text
Overview
Conversation
Data
Files
Runs
Approvals
Activity
Audit
```

## 31.1 Header

Shows:

```text
Title
Status
Department
Process
Assigned agent
Human owner
Priority
Due date
Risk level
Source
Created at
Last updated
```

## 31.2 Overview tab

Shows:

```text
AI summary
Current status
Current blocker
Recommended next action
Extracted data summary
Linked records
Important warnings
Pending approvals
```

Finance example:

```text
AI Summary:
Invoice received from Supplier AG for CHF 1,240.00.
All required fields extracted except VAT number.
Agent recommends requesting corrected invoice.

Current blocker:
VAT number missing.

Next action:
Approve supplier follow-up email.
```

## 31.3 Conversation tab

Includes:

```text
Email thread
Chat messages
Internal comments
Agent messages
Human replies
System notes
```

Rule:

```text
Any actionable conversation must be linked to a work item.
```

## 31.4 Data tab

Shows process-specific fields.

Invoice example:

```text
Supplier
Invoice number
Invoice date
Due date
Amount
Currency
VAT number
Purchase order
Approval owner
```

Field indicators:

```text
Extracted by AI
Edited by human
Validated
Needs review
Low confidence
Source-linked
```

## 31.5 Files tab

Shows:

```text
Original attachments
Generated documents
Drafts
Exports
Evidence files
Version history
```

## 31.6 Runs tab

Regular users see simplified run summaries.

Admins see:

```text
Run ID
Agent
Trigger
Status
Model/runtime
Skills loaded
Tools called
Cost
Duration
Errors
Trace
```

## 31.7 Approvals tab

Shows:

```text
Pending approvals
Past approvals
Rejected actions
Edited approvals
Approver comments
Approval evidence
```

## 31.8 Activity tab

Human-readable timeline.

```text
10:03 Email received
10:04 Invoice fields extracted
10:05 Supplier matched
10:07 Approval requested
10:18 Anna approved
10:19 Accounting draft created
```

## 31.9 Audit tab

Admin/compliance-only.

Shows immutable events:

```text
Tool calls
Permission checks
Data access
Credential usage
Approval IDs
Input/output hashes
Configuration versions
```

---

# 32. Agents page

## 32.1 Agent directory

Purpose:

```text
Show available AI workers and operational status.
```

Agent card:

```text
Name
Department
Role
Status
Current workload
Autonomy level
Tools enabled
Last active
Health
```

Example:

```text
Finance Clerk AI
Department: Finance Desk
Role: Invoice processing
Status: Active
Workload: 8 items
Autonomy: Draft + low-risk execution
```

---

# 33. Agent detail page

Role-aware tabs.

## 33.1 Regular user tabs

```text
Overview
Chat
Work
Activity
Files
```

## 33.2 Admin tabs

```text
Overview
Chat
Work
Runs
Skills
Tools
Memory
Knowledge
Data Access
Approvals
Evaluations
Audit
Settings
Versions
```

## 33.3 Agent Overview

Shows:

```text
Role
Department
Capabilities
Boundaries
Current workload
Autonomy level
Recent activity
Success metrics
Escalation owner
```

Example:

```text
Finance Clerk AI

Can:
- Extract invoice data
- Match suppliers
- Track missing receipts
- Prepare bookkeeping drafts
- Request approvals

Cannot:
- Execute payments
- Approve invoices
- Change supplier bank details without approval
```

## 33.4 Agent Chat

Direct interaction with the agent.

Rules:

```text
Chat can answer questions.
Chat can create work items.
Chat can update work items.
Chat can request approvals.
Chat must not become the hidden source of truth.
```

## 33.5 Agent Work

Shows assigned work:

```text
Kanban
List
Blocked
Waiting human
Completed
```

## 33.6 Agent Runs

Admin/debug view:

```text
Run ID
Trigger
Work item
Model/runtime
Skills loaded
Tools called
Status
Cost
Duration
Errors
Trace
```

## 33.7 Agent Skills

Shows installed skills:

```text
Skill
Version
Used by process
Required tools
Last used
Success rate
Test status
```

## 33.8 Agent Tools

Shows what the agent can do.

```text
Tool
Namespace
Risk level
Permission
Approval required
Credential scope
Last used
Usage count
```

## 33.9 Agent Memory

Sections:

```text
Curated Memory
Learned Facts
Pending Memory Updates
Memory Search
Archived Memory
Memory Settings
```

## 33.10 Agent Knowledge

Shows approved source material available to the agent.

```text
Policies
SOPs
Brand guidelines
Templates
Product docs
HR docs
Finance rules
```

## 33.11 Agent Data Access

Shows record access.

Example:

```text
Can read:
Invoices, Suppliers, Receipts

Can write:
Invoice draft fields, internal notes, missing-info status

Cannot write:
Supplier bank details, payment status, final accounting approval
```

## 33.12 Agent Approvals

Shows approval rules:

```text
External emails require approval
New supplier creation requires approval
Invoices above CHF 1,000 require approval
Payment execution forbidden
```

## 33.13 Agent Evaluations

Admin-only.

Shows:

```text
Test cases
Extraction accuracy
Human correction rate
Approval rejection rate
Regression failures
Recent quality issues
```

## 33.14 Agent Audit

Shows:

```text
Agent created
Instructions changed
Skill updated
Tool permission changed
Credential connected
Run executed
Autonomy changed
```

## 33.15 Agent Settings

Admin-only:

```text
Name
Description
Department
Instructions
Runtime/model
Default processes
Autonomy level
Escalation owner
Notification rules
Active/inactive
```

---

# 34. Records page

Purpose:

```text
Show structured business data.
```

Views:

```text
Tables
Forms
Record detail
Views
Imports
Exports
Schema settings
```

## 34.1 Example records by department

Finance:

```text
Invoices
Suppliers
Receipts
Transactions
Subscriptions
```

Inventory:

```text
Assets
Assignments
Warranties
Repairs
```

Marketing:

```text
Campaigns
Assets
Brand Kit
Content Calendar
```

Product:

```text
Bugs
Feature Requests
Releases
Incidents
Product Decisions
```

HR:

```text
Employees
Onboarding Cases
Contract Drafts
Document Requests
```

## 34.2 Record detail page

Shows:

```text
Fields
Linked work items
Linked files
Related records
Activity
Agent-generated fields
Human edits
Change history
Audit
```

---

# 35. Knowledge and Memory page

Recommended tabs:

```text
Documents
Knowledge Base
Department Knowledge
Agent Memory
Memory Review
Sources
```

## 35.1 Knowledge document detail

Shows:

```text
Title
Owner
Scope
Version
Approval status
Used by agents
Last reviewed
Source file
Retrieval preview, admin-only
```

## 35.2 Memory review

Shows pending memory proposals:

```text
Agent suggests remembering:
“Supplier AG invoices should be assigned to cost centre IT-Software.”

Source:
3 approved invoices

Actions:
Approve, edit, reject
```

This prevents invisible bad memory.

---

# 36. Reports page

Purpose:

```text
Prove operational value and agent quality.
```

Tabs:

```text
Operations
Agent Performance
Time Saved
Quality
Cost
Approvals
Audit Reports
```

Metrics:

```text
Work items completed
Average cycle time
Estimated time saved
Cost per work item
Human approval rate
Agent autonomy rate
Failure rate
Rework rate
Most common blockers
SLA compliance
Tool failure rate
Quality rating
```

Department-specific reports:

Finance:

```text
Invoices processed
Missing receipts
Invoices awaiting approval
Average invoice processing time
Month-end close progress
Duplicate invoices detected
```

Inventory:

```text
Assets registered
Missing serial numbers
Unassigned devices
Warranty expirations
Offboarding returns
```

Product:

```text
Bugs triaged
Feature requests clustered
Release notes drafted
Incident summaries created
Recurring errors
```

---

# 37. Admin Studio

Admin Studio is the control plane for the harness.

## 37.1 Admin Overview

Shows:

```text
Active agents
Failed runs
Pending approvals
Tool errors
Integration issues
High-risk actions
Memory pending review
Recent configuration changes
```

## 37.2 Admin Departments

Manage:

```text
Departments
Members
Default agents
Processes
Records
Dashboards
Permissions
Intake routes
```

## 37.3 Admin Agents

Agent creation flow:

```text
1. Choose agent template
2. Assign department
3. Select processes
4. Install skills
5. Select tools
6. Configure memory access
7. Configure approval rules
8. Test with sample work item
9. Publish
```

## 37.4 Admin Processes

Process detail tabs:

```text
Overview
Workflow
Intake
Fields
Agents
Skills
Tools
Approvals
Outputs
Analytics
Settings
```

## 37.5 Admin Skills

Skill detail tabs:

```text
Overview
Instructions
Schemas
Scripts
Templates
References
Required Tools
Evaluations
Usage
Versions
Settings
```

## 37.6 Admin Tools

Tool detail tabs:

```text
Overview
Schema
Permissions
Approval Policy
Credentials
Usage
Logs
Test
Versions
```

## 37.7 Admin MCP Servers

Technical page.

Shows:

```text
MCP server name
Transport
URL / command
Trust level
Available tools
Allowed tools
Blocked tools
Connected agents
Data-sharing policy
Last discovery
Logs
```

## 37.8 Admin Integrations

Examples:

```text
Email
Slack / Teams
Google Drive
Microsoft 365
Accounting system
GitHub
Sentry
Linear / Jira
HRIS
CRM
Inventory system
```

Integration detail:

```text
Status
Connected account
Permissions
Used by departments
Used by agents
Recent errors
Sync history
```

## 37.9 Admin Credentials

Credential vault.

Shows:

```text
Credential name
Provider
Scope
Owner
Used by tools
Used by agents
Last used
Expires at
Rotation status
```

## 37.10 Admin Data Schemas

Manage:

```text
Record types
Fields
Validation rules
Relationships
Views
Forms
Permissions
Imports/exports
```

## 37.11 Admin Memory Scopes

Configure:

```text
Who can read
Who can write
Review required
Retention policy
Source requirements
Deletion rules
```

## 37.12 Admin Runs & Traces

Debug page:

```text
Agent runs
Tool calls
Errors
Retries
Costs
Model calls
Trace timeline
Inputs/outputs
```

## 37.13 Admin Evaluations

Quality control page:

```text
Eval suites
Test cases
Recent regression failures
Human correction rate
Skill performance
Agent quality trends
```

## 37.14 Admin Audit

Compliance page:

```text
Configuration changes
Tool calls
Data access
Approval history
Permission changes
Memory changes
Credential usage
Exports
```

## 37.15 Admin Users & Roles

Roles:

```text
Regular user
Approver
Manager
Business admin
Agent admin
Integration admin
Security admin
Forward-deployed AI engineer
Organisation owner
```

## 37.16 Admin Settings

Organisation-wide:

```text
Company profile
Security
Billing
Data retention
Default autonomy levels
Notification settings
Domains
Audit settings
Regional/data policies
```

---

# 38. Forward Deployment Console

The Forward Deployment Console is a special implementation mode for internal FDEs and authorised customer admins.

## 38.1 Purpose

```text
Accelerate customer setup.
Convert customer processes into reusable templates.
Debug real workflows.
Run pilots safely.
Productise repeated implementation work.
```

## 38.2 FDE workflow

```text
1. Discovery
2. Process mapping
3. Template selection
4. Integration setup
5. Sandbox testing
6. Human validation
7. Pilot rollout
8. Production launch
9. Improvement loop
10. Template extraction
```

## 38.3 FDE Console pages

```text
Customer Overview
Discovery Notes
Process Mapper
Template Library
Agent Builder
Skill Builder
Tool Builder
Integration Setup
Sample Data Lab
Sandbox Runs
Evaluation Lab
Pilot Monitor
Production Changes
Reusable Template Extraction
Data Access Log
```

## 38.4 FDE production safeguards

```text
All production access logged
Customer admin approval required for production changes
Sensitive data access time-limited
No secret visibility
Template extraction requires sanitisation
Custom code requires review before production
```

---

# 39. Use case package: AI Finance Desk

## 39.1 Description

An AI finance clerk that receives invoices, bills, receipts, card charges, payment reminders, and accounting-related emails, then organises, tracks, reconciles, and prepares them for review.

## 39.2 Primary users

```text
Founder / CEO
Finance team
Bookkeeper
Accountant
Operations manager
Employees submitting receipts
```

## 39.3 Core jobs

```text
Receive supplier invoices
Extract invoice data
Track missing receipts
Track card charges
Match invoices to suppliers
Detect duplicates
Prepare bookkeeping drafts
Request approvals
Chase missing information
Support month-end close
Maintain finance records
```

## 39.4 Inputs

```text
Email inbox
Forwarded invoice emails
PDF attachments
Receipt uploads
Bank/card transaction exports
Accounting system data
Employee expense submissions
Supplier payment reminders
Manual form entries
```

## 39.5 Outputs

```text
Invoice record
Receipt record
Supplier record update
Missing-information request
Approval request
Bookkeeping draft
Payment preparation draft
Monthly close checklist
Finance dashboard
Audit trail
```

## 39.6 Records

```text
Invoice
Receipt
Supplier
Transaction
Expense Claim
Payment Reminder
Subscription
Credit Note
Approval Request
Monthly Close Item
```

## 39.7 Workflow stages

```text
Received
→ Extracted
→ Validated
→ Missing Information
→ Matched
→ Waiting Approval
→ Ready for Accounting
→ Exported / Synced
→ Completed
```

## 39.8 Agents

```text
Finance Triage Agent
Invoice Processing Agent
Receipt Collection Agent
Bookkeeping Preparation Agent
Monthly Close Assistant
```

## 39.9 Tools

```text
Email read/draft/send
PDF extraction
OCR
Document parser
Accounting connector
Bank/card transaction import
Supplier lookup
Record create/update
Approval request
Notification
File storage
Search/retrieval
```

## 39.10 Approval rules

Autonomous:

```text
Extract invoice data
Create invoice records
Detect duplicates
Draft bookkeeping entries
Ask employees for missing receipts
Create approval requests
```

Needs approval:

```text
Create new supplier
Change supplier bank details
Send sensitive supplier emails
Post final accounting entries
Prepare payment batch
Approve invoice
```

Forbidden initially:

```text
Execute payments
Make final tax/accounting decisions
```

---

# 40. Use case package: AI Inventory Manager

## 40.1 Description

An AI inventory manager that keeps an up-to-date record of devices, assets, equipment, software licenses, warranties, owners, locations, and lifecycle events.

## 40.2 Core jobs

```text
Register new devices
Create asset records
Track ownership
Track location
Track warranties
Track repairs
Track returns
Track software licenses
Detect missing serial numbers
Support onboarding/offboarding
Run inventory audits
```

## 40.3 Inputs

```text
Supplier invoices
Delivery notes
Purchase orders
Manual asset forms
Employee onboarding events
Employee offboarding events
Repair emails
Warranty documents
Barcode / QR scans
MDM data
HR system events
```

## 40.4 Outputs

```text
Asset record
Device assignment
Warranty reminder
Repair ticket
Missing serial number request
Inventory audit report
Offboarding return checklist
Procurement recommendation
```

## 40.5 Records

```text
Asset
Device
Software License
Employee Assignment
Location
Warranty
Repair Ticket
Supplier
Purchase Order
Asset Audit
Offboarding Return
```

## 40.6 Workflow stages

```text
Detected
→ Draft Asset Created
→ Missing Data
→ Registered
→ Assigned
→ In Use
→ Maintenance / Repair
→ Returned
→ Retired / Disposed
```

## 40.7 Agents

```text
Asset Intake Agent
Device Assignment Agent
Inventory Audit Agent
Warranty Tracking Agent
Offboarding Asset Agent
```

## 40.8 Approval rules

Autonomous:

```text
Create draft asset records
Update non-sensitive metadata
Detect missing serial numbers
Send reminder for asset confirmation
Generate inventory reports
```

Needs approval:

```text
Assign expensive assets
Mark asset as lost
Mark asset as disposed
Change owner for sensitive assets
Create purchase request
```

---

# 41. Use case package: AI Marketing Producer

## 41.1 Description

An AI marketing producer that knows the company’s brand, logo, tone, products, templates, and messaging, and can create presentations, flyers, social posts, campaign drafts, product sheets, and other marketing assets.

## 41.2 Core jobs

```text
Create slide decks
Create flyers
Create product sheets
Create social posts
Draft campaigns
Draft landing page copy
Generate sales collateral
Adapt content for audience
Maintain brand consistency
Prepare variations
Collect feedback
Version marketing assets
```

## 41.3 Inputs

```text
Brief
Logo
Brand guidelines
Website
Product information
Sales decks
Existing collateral
Campaign goals
Audience description
Customer testimonials
Screenshots
Images
Pricing information
```

## 41.4 Outputs

```text
Presentation
Flyer
Product one-pager
Social media post
Campaign plan
Landing page copy
Email campaign draft
Ad copy
Design brief
Image prompt
PDF
Brand-compliant document
```

## 41.5 Records

```text
Brand Kit
Campaign
Marketing Asset
Content Calendar Item
Product Message
Audience Segment
Template
Feedback Item
Approval Request
Published Asset
```

## 41.6 Approval rules

Autonomous:

```text
Create drafts
Generate variations
Prepare internal mockups
Summarise feedback
Update content calendar drafts
```

Needs approval:

```text
Publish externally
Send marketing emails
Post on social channels
Use customer names
Make legal/pricing/performance claims
```

---

# 42. Use case package: AI Product / Project Manager

## 42.1 Description

An AI product operations manager for each product, application, or service. It receives bugs, feature requests, Sentry alerts, GitHub events, customer feedback, and support tickets, then turns them into structured product work.

## 42.2 Core jobs

```text
Triage bug reports
Cluster feature requests
Monitor Sentry errors
Create engineering tickets
Summarise customer impact
Draft acceptance criteria
Track product decisions
Prepare release notes
Monitor open issues
Connect support feedback to roadmap
Keep product memory up to date
```

## 42.3 Inputs

```text
Sentry alerts
GitHub issues
Pull requests
Linear/Jira tickets
Support tickets
Customer emails
Feature request forms
Slack/Teams messages
Product analytics
Incident reports
User interviews
```

## 42.4 Outputs

```text
Bug work item
Feature request work item
Engineering ticket
Product brief
Acceptance criteria
Incident summary
Customer impact summary
Release note
Roadmap suggestion
Sprint/project update
```

## 42.5 Records

```text
Product
Feature Request
Bug
Incident
Release
Backlog Item
Customer Impact
Product Decision
Pull Request Summary
Roadmap Item
```

## 42.6 Approval rules

Autonomous:

```text
Create draft tickets
Summarise Sentry errors
Cluster feature requests
Draft acceptance criteria
Draft release notes
Produce status updates
```

Needs approval:

```text
Change roadmap
Commit customer promises
Close major incidents
Assign high-priority engineering work
Merge code
Deploy changes
```

---

# 43. Use case package: AI HR Coordinator

## 43.1 Description

An AI HR coordinator that manages onboarding, offboarding, document collection, contract draft preparation, employee requests, policy questions, and reminders, with human approval for sensitive decisions.

## 43.2 Core jobs

```text
Create onboarding cases
Prepare contract drafts
Collect missing documents
Answer policy questions
Track probation dates
Prepare offboarding checklists
Coordinate equipment requests
Draft employee communications
Track signatures
Maintain HR task status
```

## 43.3 Inputs

```text
New hire form
Candidate information
Role information
Contract templates
HR policy documents
Manager requests
Employee emails
Signed documents
Calendar dates
Payroll-related data
IT equipment requests
```

## 43.4 Outputs

```text
Onboarding checklist
Contract draft
Document request
Policy answer
HR task
Approval request
Offboarding checklist
Equipment request
Reminder
Employee record update
```

## 43.5 Records

```text
Employee
Candidate
Contract Draft
Onboarding Case
Offboarding Case
Document Request
Policy Question
Equipment Request
Approval Request
HR Task
```

## 43.6 Approval rules

Autonomous:

```text
Create onboarding checklist
Collect missing information
Send reminders
Answer policy FAQs from approved documents
Prepare contract drafts
Update non-sensitive task status
```

Needs approval:

```text
Send employment contract
Change salary/compensation content
Handle termination-related communication
Handle disciplinary matters
Approve policy exceptions
Send sensitive employee communication
```

---

# 44. Public API and event architecture

## 44.1 Public API categories

```text
Work Items API
Records API
Agents API
Runs API
Approvals API
Tools API
Webhooks API
Files API
Knowledge API
Memory API
Reports API
Admin API
```

## 44.2 Webhook events

```text
work_item.created
work_item.updated
work_item.completed
approval.requested
approval.approved
approval.rejected
agent.run.started
agent.run.completed
agent.run.failed
tool_call.started
tool_call.completed
tool_call.failed
record.created
record.updated
artifact.created
memory.proposed
memory.approved
```

## 44.3 Internal event bus

Use event-driven architecture for:

```text
Intake events
Work item state changes
Run scheduling
Tool call completion
Approval decisions
Record updates
Memory proposals
Notifications
Metrics aggregation
Audit logging
```

---

# 45. Notifications

Notification channels:

```text
In-app
Email
Slack / Teams later
Webhook
Digest
```

Notification types:

```text
Approval needed
Work assigned
Missing information requested
Agent failed
High-risk action requested
Integration error
Process completed
Memory review needed
Evaluation failed
```

---

# 46. Billing and usage metering

Even if pricing is not final, usage must be measured from day one.

## 46.1 Tracked usage

```text
Work items created
Work items completed
Agent runs
Tool calls
Model usage
Storage
Integrations
Approvals
Documents processed
Artifacts generated
Active agents
Active departments
FDE setup hours, internal only
```

## 46.2 Recommended pricing structure

```text
Platform fee
+ department package fee
+ work item / usage tier
+ optional FDE setup fee
```

Example packaging:

```text
AI Finance Desk
Includes X invoices/month.
Additional processed invoice fee after threshold.

AI Inventory Manager
Includes X assets/month.

Platform
Includes core harness, users, records, approvals, audit.
```

---

# 47. Marketing and sales messaging

## 47.1 Primary one-liner

> **JobDone AI is the AI Agent Work System for businesses. It lets companies deploy AI agents that turn emails, documents, forms, and business tools into completed, tracked, and auditable work.**

## 47.2 Short one-liner

> **From inbox to done, with AI agents.**

## 47.3 Customer-facing message

> **Deploy AI desks for finance, inventory, HR, marketing, support, and product operations. Each AI desk receives work, uses your tools, updates records, asks for approval where needed, and keeps a full audit trail.**

## 47.4 Manager-facing message

> **See every work item, blocked task, approval, agent action, and completed outcome in one operational dashboard.**

## 47.5 Admin-facing message

> **Control which tools agents can use, which records they can access, which actions need approval, and how every action is audited.**

## 47.6 Investor-facing message

> **JobDone AI is not building one-off bots. It is building the reusable work system for AI agents in business operations. Each deployment compounds process templates, skill packages, integrations, memory patterns, evaluations, and business workflow infrastructure.**

---

# 48. MVP scope

## 48.1 MVP product

```text
AI Finance Desk + AI Inventory Manager handoff
```

## 48.2 MVP demo scenario

```text
1. Supplier emails invoice for five laptops.
2. Finance AI receives the invoice.
3. AI extracts supplier, amount, due date, invoice number, VAT.
4. AI creates invoice work item.
5. AI detects the invoice contains physical assets.
6. AI creates five draft asset records.
7. AI asks for missing serial numbers.
8. Human approves invoice.
9. AI marks assets as pending assignment.
10. Inventory AI assigns devices to employees.
11. Dashboard shows invoice status, asset status, approvals, missing information, and audit trail.
```

## 48.3 MVP P0 modules

```text
Organisation / tenant
Users and roles
Departments
Agent identity
Email intake
File/attachment handling
Work item engine
Kanban board
Business records/tables
Basic process templates
Agent runs
Tool registry
PDF extraction
Structured extraction
Approval queue
Memory scopes
Audit log
Basic dashboard
Admin Studio basics
FDE setup mode
```

## 48.4 MVP P0 departments

```text
Finance Desk
Inventory Desk
```

## 48.5 MVP P0 agents

```text
Finance Triage Agent
Invoice Processing Agent
Inventory Intake Agent
```

## 48.6 MVP P0 process templates

```text
Process Supplier Invoice
Register New Asset
Track Missing Information
Request Approval
```

## 48.7 MVP P0 records

```text
Invoice
Supplier
Asset
Employee Assignment
Approval Request
```

## 48.8 MVP P0 tools

```text
read_email
draft_email
send_email_with_approval
create_work_item
update_work_item
create_record
update_record
search_records
upload_file
extract_pdf_text
extract_structured_fields
request_approval
send_notification
search_memory
write_memory_note
create_artifact
generate_document_draft
call_webhook
```

---

# 49. Roadmap

## 49.1 Phase 0: Prototype

Goal:

```text
Prove work-item-centric agent flow.
```

Build:

```text
Email intake
Manual work item creation
Basic work board
Invoice extraction
Agent run log
Approval queue
Invoice and supplier tables
Basic audit events
```

## 49.2 Phase 1: MVP

Goal:

```text
Deploy Finance + Inventory for pilot customers.
```

Build:

```text
Departments
Agent detail pages
Records
Skill packages
Tool Gateway P0
Memory scopes P0
FDE Console P0
Dashboards
Sandbox/staging/production basics
```

## 49.3 Phase 2: Repeatable deployments

Goal:

```text
Make deployments template-driven.
```

Build:

```text
Process template builder
Agent package builder
Skill versioning
Evaluation suites
Integration library
Tool policies
Memory review
Customer admin workflows
```

## 49.4 Phase 3: Multi-department platform

Goal:

```text
Add Product Ops, HR, Marketing, Support, Sales Ops.
```

Build:

```text
More department packages
More integrations
Advanced artifacts
Advanced reports
Subagents
Agent handoffs
MCP resources/prompts
```

## 49.5 Phase 4: Platform ecosystem

Goal:

```text
Enable customers and partners to build on the harness.
```

Build:

```text
Tool marketplace
Skill marketplace
Certified MCP servers
Customer-built tools
Visual workflow builder
Advanced evals
Enterprise deployment modes
```

---

# 50. Non-functional requirements

## 50.1 Reliability

```text
Work item state must be durable.
Agent runs must be retryable.
Tool calls must be idempotent where possible.
Approval pauses must survive restarts.
Failed runs must be visible and recoverable.
```

## 50.2 Performance

```text
UI pages should load quickly for common department sizes.
Search should return results across work, records, and knowledge.
Agent runs may be asynchronous.
Long-running processes must show progress.
```

## 50.3 Scalability

```text
Support many departments per organisation.
Support many agents per department.
Support high-volume email intake.
Support large record tables.
Support many tool calls and audit events.
```

## 50.4 Security

```text
Tenant isolation.
Credential isolation.
Permission checks before tool execution.
Audit all sensitive actions.
No direct agent access to secrets.
```

## 50.5 Maintainability

```text
Versioned agents, skills, tools, and processes.
Clear module boundaries.
Reusable templates.
Configurable but not over-generalised v1.
```

## 50.6 Observability

```text
Every run traceable.
Every tool call logged.
Every approval linked.
Every output linked to sources where possible.
```

---

# 51. MVP acceptance criteria

## 51.1 Finance invoice flow

The system passes if:

```text
A supplier invoice can be received by email.
A work item is created automatically.
Invoice fields are extracted.
Invoice PDF is attached.
Supplier record is matched or created as draft.
Missing fields are detected.
An approval is requested when needed.
The user can approve/reject/edit.
The agent updates the work item status.
All actions appear in activity and audit.
Dashboard metrics update.
```

## 51.2 Inventory asset handoff

The system passes if:

```text
An invoice containing devices triggers asset draft creation.
Asset records link to the invoice.
Missing serial numbers are tracked.
Inventory AI can request missing data.
A human can approve assignment.
Asset status updates.
Audit logs show the handoff.
```

## 51.3 Tool governance

The system passes if:

```text
Agents cannot call tools outside their policy.
High-risk tools require approval.
Tool calls are logged.
Tool inputs and outputs are validated.
Credential usage is recorded.
Failed tool calls are visible.
```

## 51.4 Admin setup

The system passes if:

```text
An admin or FDE can create a department.
Create/configure an agent.
Assign skills.
Assign tools.
Configure approval rules.
Connect email intake.
Test with sample data.
Publish to production.
```

## 51.5 Trust and transparency

The system passes if a user can answer:

```text
What did the agent do?
Why did it do it?
Which data did it use?
Which tool did it call?
Who approved it?
What changed?
Can I correct it?
Can I see the audit trail?
```

---

# 52. What not to build first

Avoid in v1:

```text
Full visual workflow builder
Marketplace
Autonomous payments
Autonomous HR/legal decisions
Generic agent personality system
Overly complex multi-agent hierarchy
Raw vector memory UI
Unrestricted customer MCP installation
Arbitrary code execution by default
Full enterprise permission model before pilots
Every possible chat channel
```

---

# 53. Known risks and mitigations

## 53.1 Risk: becoming services-heavy

Mitigation:

```text
Every FDE deployment must produce reusable artifacts:
- process template
- skill package
- eval case
- tool connector improvement
- schema improvement
- dashboard pattern
```

## 53.2 Risk: chatbot perception

Mitigation:

```text
Lead with departments, work items, approvals, records, and dashboards.
Chat is secondary.
```

## 53.3 Risk: unsafe tool usage

Mitigation:

```text
All tools through Tool Gateway.
Risk levels.
Approval by default for side effects.
Full audit.
```

## 53.4 Risk: memory contamination

Mitigation:

```text
Scoped memory.
Source links.
Human review for shared/high-risk memory.
Deletion and retention policies.
```

## 53.5 Risk: too much platform too early

Mitigation:

```text
Use Finance + Inventory as anchor.
Build reusable primitives only when exercised by real workflows.
Delay full no-code builder.
```

## 53.6 Risk: unclear brand/category

Mitigation:

```text
Use clear public category:
The AI Agent Work System.

Use concrete customer products:
AI Finance Desk, AI Inventory Desk, AI HR Desk.

Use technical depth in sales/investor conversations:
Business Agent Harness, Tool Gateway, Skill Library, Memory Layer.
```

---

# 54. Final consolidated platform statement

JobDone AI is **The AI Agent Work System**.

The platform is a reusable harness for deploying AI agents into business workflows.

Every agent has:

```text
Identity
Role
Department
Processes
Skills
Tools
Memory
Knowledge
Permissions
Approval rules
Observable runs
Audit history
```

Every unit of work is represented as:

```text
Work Item
```

Every business use case is represented as:

```text
Process Template
```

Every reusable worker is represented as:

```text
Agent Package
```

Every reusable capability is represented as:

```text
Skill Package
```

Every business action is executed through:

```text
Tool Gateway
```

Every risky action is controlled by:

```text
Approval and Autonomy System
```

Every important business output is visible through:

```text
Records
Artifacts
Dashboards
Audit
```

The product should feel simple to business users:

> **“I have an AI team that handles work, shows progress, asks me for approval, and keeps records clean.”**

It should feel powerful to managers:

> **“I can see what the AI team is doing, what is blocked, what needs approval, and how much time it saves.”**

It should feel controllable to admins:

> **“I can configure agents, skills, tools, permissions, processes, memory, and approvals in one control plane.”**

It should feel scalable to investors:

> **“This is not a collection of one-off bots. It is the AI Agent Work System for business operations.”**
