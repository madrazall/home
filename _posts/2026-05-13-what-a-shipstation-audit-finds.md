---
layout: post
title: "What a ShipStation Audit Actually Finds"
category: "ShipStation"
read_time: "5 min"
---

Nobody calls it an audit when they ask for one. They say something like: "our shipping feels off" or "I feel like we're paying too much" or "we keep having weird issues and I can't figure out where they're coming from."

That's the audit request. The specifics come later.

What I've found doing this work is that ShipStation problems almost always fall into the same categories. The details are different every time — different carriers, different store setups, different volume — but the root causes repeat. Here's what actually shows up.

## Rate Sources Nobody Audited After Setup

This is the most common finding and the most expensive one.

When you connect a carrier account to ShipStation, the platform doesn't automatically use your rates. It uses whatever source is configured — which might be your account, might be ShipStation's negotiated rates, might be a mix depending on the service and ship-from location.

Most stores connect their carrier once, see rates populating, and assume they're their rates. They're often not. And the difference between what you're paying and what you should be paying can be significant at any meaningful volume.

A rate source audit means pulling actual label costs, comparing them against the carrier invoice line by line, and tracing any discrepancy back to the configuration. It's not complicated. It's just tedious enough that it doesn't happen unless someone makes it happen.

## Automation Rules That Are Partially Right

ShipStation's automation rules are powerful and easy to misconfigure. The typical pattern: someone set up rules when the store launched, the rules worked for the initial product mix, and then the catalog grew or changed and nobody updated them.

The result is rules that apply correctly to 80% of orders and silently do the wrong thing to the other 20%. Wrong service selected. Wrong package type. Wrong carrier. The orders still ship — they just ship wrong.

Finding this requires going through every active rule, mapping it against the current product catalog and order types, and identifying the gaps. It also means looking at orders that weren't caught by automation to understand why — sometimes the rule logic has an exclusion that wasn't intentional.

## Weight Problems Hiding in the Catalog

Dimensional and actual weight issues show up in almost every audit. Products with weight set to zero. Products with weight entered in the wrong unit. Products that were updated and lost their weight data in the process.

ShipStation doesn't reject these. It calculates rates against whatever it has, which means you're either undercharging customers for shipping or overpaying at the label level — sometimes both, depending on the carrier and the weight threshold.

The catalog weight audit is usually a spreadsheet pull from the connected store, filtered for anomalies, cross-referenced against actual product specs. Not glamorous. Genuinely useful.

## Carrier Accounts That Are Connected But Not Verified

There's a difference between a carrier account that shows as connected in ShipStation and one that's actually authenticated, pulling live rates, and routing labels correctly.

I've seen carrier accounts with expired credentials still showing as "connected" — the green dot was there, but the rates being surfaced weren't coming from that account. I've seen accounts connected to the wrong ship-from location, so FedEx rates were calculating from an address that wasn't the warehouse. I've seen duplicate accounts where only one was working and nobody knew which one.

Verification means generating test labels, comparing rates against the carrier portal, and confirming the account number on the label matches the account that gets invoiced.

## Reporting That Isn't Telling the Whole Story

ShipStation has reporting built in. Most stores aren't using it to answer the questions that actually matter: what are we spending per order by carrier, by zone, by product type? Where are the re-ships coming from? Which shipping methods are generating the most cost variance?

An audit usually includes a look at what data is available, what's being tracked, and what isn't. The point isn't to build a dashboard — it's to identify whether the store has visibility into its own shipping costs or whether it's operating on assumptions.

The answer is usually assumptions.

## What Happens After

The audit output is a list of findings with severity and a recommended fix order. Some things get resolved in the same session — rate source corrections, carrier reauth, rule logic fixes. Others are longer-term: catalog weight cleanup, reporting setup, process changes.

The goal isn't a perfect ShipStation configuration. It's a ShipStation configuration you can trust — one where you know where the rates are coming from, the automation is doing what you think it's doing, and the numbers you're looking at reflect reality.

That's a different place than where most stores are.

---

*If any of this sounds familiar, [let's take a look.](https://madrazall.github.io/home/#contact) An audit is usually a single session and the findings pay for themselves fast.*
