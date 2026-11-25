# BloodLink AI

AI-assisted blood donor discovery and emergency coordination platform built for the **BUiLDX** hackathon[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span).

## Project Title and Overview
BloodLink AI helps hospitals and requesters coordinate blood donor outreach through a structured request-to-response workflow while keeping clinical screening and medical decisions strictly with licensed blood centres[span_13](start_span)[span_13](end_span)[span_14](start_span)[span_14](end_span). This prototype uses fictional sample records for demonstration purposes[span_15](start_span)[span_15](end_span).

## Problem Statement
During medical emergencies, finding available blood donors is slowed down by fragmented contact information across calls and messages, urgent time pressure, and manual follow-up tracking across potential volunteers[span_16](start_span)[span_16](end_span)[span_17](start_span)[span_17](end_span).

## Proposed Solution
BloodLink AI replaces scattered outreach with one structured workflow[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span):
1. A hospital or requester creates a blood request (blood group, component, units, urgency, zone, and contact)[span_20](start_span)[span_20](end_span)[span_21](start_span)[span_21](end_span).
2. The system filters consented sample donor profiles matching the requested blood group[span_22](start_span)[span_22](end_span)[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).
3. Potential contacts are prioritised using zone match, distance, and response history[span_25](start_span)[span_25](end_span)[span_26](start_span)[span_26](end_span).
4. Responses (`Pending`, `Accepted`, `Declined`, or `Directed to Licensed Centre`) and audit events are tracked in one view[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span)[span_29](start_span)[span_29](end_span).
5. Interested volunteers are directed to a licensed blood centre for identity checks, donor fitness assessment, testing, and compatibility/issue[span_30](start_span)[span_30](end_span)[span_31](start_span)[span_31](end_span).

## Key Features
- **Emergency Request Form:** Captures requester details, blood group, component, units, urgency, and location zone[span_32](start_span)[span_32](end_span)[span_33](start_span)[span_33](end_span).
- **Consent-Based Sample Donor Registration:** Allows adding sample volunteers with explicit consent and voluntary/free participation terms[span_34](start_span)[span_34](end_span)[span_35](start_span)[span_35](end_span).
- **Priority Ranking & Response Tracking:** Ranks matching sample profiles and tracks live counts for matched, pending, accepted, and centre-directed leads[span_36](start_span)[span_36](end_span)[span_37](start_span)[span_37](end_span)[span_38](start_span)[span_38](end_span).
- **Coordination Audit Log:** Records request creation and status updates with timestamps[span_39](start_span)[span_39](end_span)[span_40](start_span)[span_40](end_span).
- **Clear Clinical Boundaries:** Explicitly separates communication/coordination from medical screening, crossmatching, and transfusion decisions[span_41](start_span)[span_41](end_span)[span_42](start_span)[span_42](end_span).

## Technologies Used
- **Frontend & Prototype Logic:** HTML5 (`index.html`), CSS3 (`style.css`), and JavaScript (`script.js`) with in-memory fictional sample data[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span)[span_45](start_span)[span_45](end_span)[span_46](start_span)[span_46](end_span).
- **Planned / Target Architecture Components:** Backend services, access-controlled database, consent/audit storage, maps/notifications, and licensed blood centre workflows (not yet live in the basic prototype)[span_47](start_span)[span_47](end_span).

## Installation and Setup Instructions
1. Clone or download the repository from GitHub (`https://github.com/sk604246282-rgb/BloodLink-AI`)[span_48](start_span)[span_48](end_span)[span_49](start_span)[span_49](end_span).
2. Keep `index.html`, `style.css`, and `script.js` together in the same folder[span_50](start_span)[span_50](end_span)[span_51](start_span)[span_51](end_span)[span_52](start_span)[span_52](end_span).
3. No external package installation or build step is required for the static prototype[span_53](start_span)[span_53](end_span)[span_54](start_span)[span_54](end_span)[span_55](start_span)[span_55](end_span).

## How to Run the Project
1. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, or mobile browser)[span_56](start_span)[span_56](end_span).
2. Fill out **1. Create Emergency Blood Request** and click **Search & Prioritise Consented Donors**[span_57](start_span)[span_57](end_span).
3. Test **Accept**, **Decline**, or **Direct to Centre** actions, register a sample volunteer, and check the **Coordination Audit Log**[span_58](start_span)[span_58](end_span)[span_59](start_span)[span_59](end_span).

## Project Architecture or Workflow
- **User Interface:** Hospital request form, sample volunteer registration, response tracker, and audit log (`index.html`, `style.css`)[span_60](start_span)[span_60](end_span)[span_61](start_span)[span_61](end_span)[span_62](start_span)[span_62](end_span).
- **Application Logic:** Input handling, blood-group and consent filtering, priority scoring, and status updates (`script.js`)[span_63](start_span)[span_63](end_span)[span_64](start_span)[span_64](end_span).
- **Data & Services (Prototype vs. Target):** Currently uses fictional in-memory sample records (`script.js`); target architecture includes secured storage, consent records, audit logs, and notification/map services[span_65](start_span)[span_65](end_span)[span_66](start_span)[span_66](end_span).
- **Licensed Blood Centre:** Handles donor screening, testing, compatibility, and blood issue[span_67](start_span)[span_67](end_span).

## Team Members and Contributions
- **Shivam Kumar** — Project coordination, prototype setup, and submission documentation[span_68](start_span)[span_68](end_span)[span_69](start_span)[span_69](end_span)[span_70](start_span)[span_70](end_span)[span_71](start_span)[span_71](end_span).
- **Susmita Chanda** — Solution workflow, safety/consent framing, and presentation support[span_72](start_span)[span_72](end_span).
- **Suhani Joshi** — Problem analysis, coordination flow, and presentation support[span_73](start_span)[span_73](end_span).
- **Anushka Deshmukh** — Clinical boundaries, pilot/evaluation structure, and presentation support[span_74](start_span)[span_74](end_span).
