# DORA Article 30 — Contract Addendum Template

**For:** ICT third-party service providers contracting with EU financial entities
**Aligned with:** Regulation (EU) 2022/2554 (DORA), Article 30(2) and 30(3)
**Version:** 2026.05 · DoraPilot
**Licence:** CC BY 4.0 — adapt freely with attribution

> **HOW TO USE THIS TEMPLATE**
>
> This is a starting point for the contract addendum your bank or insurance customer will send you, or that you can proactively offer them. Read every bracketed `[ITEM]` and replace with values specific to your service. Mark items as `[TO BE NEGOTIATED]` if commercially open. **This is not legal advice.** Have your counsel review the final text before signing.

---

## Annex DORA-30 — Digital Operational Resilience Act Provisions

This Annex forms an integral part of the Master Services Agreement (the "MSA") between:

- **The Customer:** `[CUSTOMER LEGAL NAME]`, a financial entity within the meaning of Article 2(1) of Regulation (EU) 2022/2554 ("DORA"), incorporated under the laws of `[JURISDICTION]` with registered office at `[ADDRESS]` ("Customer");
- **The Provider:** `[YOUR LEGAL NAME]`, an ICT third-party service provider within the meaning of Article 3(19) of DORA, incorporated under the laws of `[JURISDICTION]` with registered office at `[ADDRESS]` ("Provider").

In the event of conflict between this Annex and any other part of the MSA, this Annex prevails.

---

### 1. Definitions

Terms not defined in this Annex have the meaning given in DORA. Where DORA references are made, they refer to the consolidated text of Regulation (EU) 2022/2554 as published in the Official Journal of the European Union on 27 December 2022.

- **"Critical or Important Function"** means a function whose disruption would materially impair the Customer's financial performance, the continuity of its services, or its ability to meet its obligations under applicable financial law, as determined by the Customer in accordance with Article 28(2) of DORA.
- **"Major ICT-Related Incident"** has the meaning given in Article 3(10) of DORA.
- **"Subcontractor"** means any third party engaged by the Provider to perform any part of the Services.
- **"Services"** means the services described in `[REFERENCE TO MSA SECTION OR ORDER FORM]`.

---

### 2. Service description and location (Art. 30(2)(a) and 30(3)(a))

2.1 The Services consist of: `[DETAILED DESCRIPTION OF MODULES, FUNCTIONALITIES, AND THE CUSTOMER'S USE CASE]`.

2.2 The Services are delivered from the following locations:
- **Primary processing region:** `[REGION, COUNTRY]`
- **Backup / disaster recovery region:** `[REGION, COUNTRY]`
- **Support team locations:** `[CITY, COUNTRY]`

2.3 No personal data of the Customer leaves the European Economic Area without prior written consent from the Customer, except as governed by the Data Processing Agreement attached as Annex `[X]`.

---

### 3. Service levels (Art. 30(2)(c))

3.1 The Provider commits to the following service levels:

| Metric | Target | Measurement |
|---|---|---|
| Availability (monthly) | `[99.9%]` | `[YOUR STATUS PAGE URL]` |
| Time to acknowledge Major Incident | ≤ 2 hours from detection | Provider incident ticketing system |
| Time to provide initial status report | ≤ 4 hours from detection | Email to `[CUSTOMER NOMINATED CONTACT]` |
| Time to deliver post-incident report | ≤ 5 business days | Written report |

3.2 Service credits or remedies for breach of these levels are set out in `[REFERENCE TO MSA SLA SECTION]`.

---

### 4. Data protection (Art. 30(2)(b))

4.1 The processing of personal data under this Agreement is governed by the Data Processing Agreement attached as Annex `[X]`, executed pursuant to Article 28 of Regulation (EU) 2016/679 (GDPR).

4.2 The Provider undertakes to comply with the security requirements set out in Article 32 of GDPR and the Information Security Annex (Annex `[Y]`).

---

### 5. Assistance during ICT-related incidents (Art. 30(2)(d))

5.1 In the event of a Major ICT-Related Incident affecting the Services, the Provider shall provide assistance to the Customer "at no additional cost, or at a cost that is determined ex-ante" within the meaning of DORA Article 30(2)(d).

5.2 Such assistance shall include:
- Real-time status updates via `[AGREED CHANNEL — Slack/email/phone]`;
- Provision of technical logs and forensic data sufficient for the Customer to meet its own reporting obligations under DORA Article 19;
- Participation of the Provider's incident response team in joint calls during the active incident;
- Post-incident written report including root cause, mitigations, and preventive actions.

5.3 No separate fee shall be charged for the assistance set out in this clause. The Provider's standard support fees, if any, are unaffected.

---

### 6. Cooperation with competent authorities (Art. 30(2)(e))

6.1 The Provider shall cooperate with the Customer's competent authority — including the `[CENTRAL BANK OF IRELAND / BAFIN / AMF / OTHER]` — and the European Supervisory Authorities, providing such information and access to systems as is lawfully required for the supervision of the Customer's compliance with DORA.

6.2 The Provider shall not invoke commercial confidentiality, intellectual property, or contractual exclusivity as grounds to refuse cooperation with a competent authority acting within its statutory remit.

6.3 The Provider shall notify the Customer in writing within 24 hours of receiving any communication from a competent authority that pertains to the Services.

---

### 7. Termination rights (Art. 30(2)(f))

7.1 The Customer may terminate this Agreement for cause, with written notice and a reasonable cure period of `[15-30] days`, in any of the following circumstances:

- Material breach by the Provider of this Annex or the underlying MSA;
- Repeated failure to meet the service levels in Section 3;
- A material change in the Provider's security posture, ownership, or location of processing that increases risk to the Customer;
- A written instruction from a competent authority of the Customer requiring termination;
- The Provider becoming subject to insolvency proceedings, regulatory sanctions, or loss of relevant licences or certifications.

7.2 In the case of termination ordered by a competent authority, no cure period applies and the Customer may terminate with immediate effect.

---

### 8. Exit and transition cooperation (Art. 30(2)(g))

8.1 Upon termination, expiry, or upon the Customer's written request, the Provider shall:

- Continue to provide the Services for a transition period of up to `[6-12] months` at the then-current fees;
- Provide all Customer data in `[FORMAT — open, machine-readable]` within `[30] days` of request;
- Assist the Customer in migrating to a replacement provider, including providing reasonable knowledge transfer at no additional charge;
- Issue a written certificate of secure deletion of all Customer data within `[60] days` of the end of the transition period.

8.2 The Provider shall not invoke prohibitive exit fees or technical lock-in mechanisms that would frustrate this exit obligation, in line with the spirit of DORA's substitutability requirement (Article 28(8)).

---

## Additional clauses for Critical or Important Functions (Art. 30(3))

> **Note:** The following clauses apply only where the Customer has classified the Services as supporting a Critical or Important Function. The classification is made by the Customer in accordance with Article 28(2) of DORA. The Provider shall be notified in writing of the classification at the latest at contract signature.

---

### 9. Detailed scope, sub-outsourcing, and substitutability (Art. 30(3)(a) and (b))

9.1 The locations from which the Services are delivered are listed in Section 2 above and may not be changed without `[30] days` prior written notice to the Customer.

9.2 The Provider may engage Subcontractors to perform any part of the Services, subject to the following conditions:

- The Provider publishes and maintains an up-to-date list of all Subcontractors at `[URL — e.g., your /legal/subprocessors page]`.
- The Provider shall notify the Customer in writing at least `[30] days` before adding, removing, or replacing any Subcontractor materially involved in supporting the Critical or Important Function.
- The Customer may object on reasonable data-protection or operational-resilience grounds; if the objection cannot be resolved within `[15] business days`, the Customer may terminate the Services without penalty.
- The Provider remains liable to the Customer for all acts and omissions of its Subcontractors as if they were its own.

9.3 Where reasonably requested, the Provider shall describe the substitutability of the Services and identify any sub-contractor whose removal would materially impair the Services.

---

### 10. Performance reporting (Art. 30(3)(c))

10.1 The Provider shall deliver to the Customer quarterly reports covering:

- Service level performance against the targets in Section 3;
- Material security events affecting the Services;
- Changes to the Subcontractor list;
- Capacity utilisation and projected capacity needs;
- Material changes to the Provider's certifications (SOC 2, ISO 27001, etc.).

---

### 11. Right of audit (Art. 30(3)(e))

11.1 The Customer, its appointed auditors, and the competent authority of the Customer shall have the right to audit the Provider in respect of the Services. The scope of the audit shall include:

- Review of documentation, policies, procedures, and records;
- Interviews with relevant Provider staff;
- Observation of operational practices;
- Where strictly necessary and proportionate, on-site inspection of Provider facilities.

11.2 Such audits shall take place no more than once per twelve-month period absent a specific incident or supervisor order, with `[30] days` prior written notice, and at reasonable times. The Customer shall bear its own costs; the Provider bears its own staff time.

11.3 In place of an on-site audit, the Customer may at its discretion rely on:
- The most recent independent assurance report (e.g. SOC 2 Type II, ISO 27001 surveillance audit) provided by the Provider under NDA;
- Pooled audits coordinated with other regulated customers of the Provider.

11.4 The Provider shall not refuse, restrict, or attempt to charge for audit rights exercised by a competent authority within its statutory remit.

---

### 12. Threat-led penetration testing participation (Art. 30(3)(f))

12.1 Where the Customer is required to perform a threat-led penetration test under Article 26 of DORA, and the Services support a Critical or Important Function within the scope of that test, the Provider shall:

- Permit the Customer's authorised red team to perform reconnaissance and testing against systems supporting the Services, in accordance with a written rules-of-engagement agreement;
- Designate a technical point of contact for the duration of the test;
- Treat the testing as a legitimate activity authorised by the Customer for the purpose of complying with DORA, notwithstanding any general security policies of the Provider that would otherwise prohibit such activity.

12.2 The Provider may impose reasonable conditions to protect other customers, including segmentation of test scope and timing windows.

---

### 13. Exit strategy (Art. 30(3)(g) and Art. 28(8))

13.1 The Provider has prepared and maintains a documented exit strategy, made available to the Customer upon request, describing:

- The procedure for handing over the Services to a replacement provider or back to the Customer;
- The estimated duration of the transition (currently `[X] months`);
- The format and structure of all data extracts;
- The cost basis for transition assistance, including any per-day fee structure;
- The escalation path in the event the Customer becomes uncooperative or the transition is contested.

13.2 The exit strategy shall be sufficient to allow the Customer to migrate without significant business disruption, in line with Article 28(8) of DORA.

---

## Signatures

For and on behalf of `[CUSTOMER LEGAL NAME]`:

Name: ____________________________
Title: ____________________________
Date: ____________________________
Signature: ________________________

For and on behalf of `[YOUR LEGAL NAME]`:

Name: ____________________________
Title: ____________________________
Date: ____________________________
Signature: ________________________

---

## Template notes (delete before signing)

- **Tier 1 vs Tier 2:** Clauses 2–8 are mandatory for all ICT contracts (Art. 30(2)). Clauses 9–13 only apply if the function is classified Critical or Important (Art. 30(3)). Confirm the tier with the Customer in writing before signing.
- **Service levels:** The values in §3 are placeholders. Tighter SLAs are commercially negotiable — adjust based on your actual service capability and the Customer's stated needs.
- **Audit cadence:** §11 caps audits at annual + supervisor-ordered. Some banks ask for "audit on demand"; politely push back to "annual + with cause" as industry standard.
- **Sub-processor notice period:** §9.2 uses 30 days; some EU banks ask for 60-90 days. Negotiable but document your preferred operating cadence.
- **Exit transition:** 6-12 months is generous; defaults around 90 days are common. Customer should articulate what they need.
- **Governing law:** Not included here — typically set in the MSA. If your MSA is silent, default to the Customer's home jurisdiction.

---

*This template was prepared by DoraPilot Ltd. (Dublin, Ireland). It is provided as a starting point only and does not constitute legal advice. Final contract language should be reviewed by qualified counsel before execution. For the latest version of this template and other DORA artefacts, see [https://dorapilot.com/templates](https://dorapilot.com/templates).*
