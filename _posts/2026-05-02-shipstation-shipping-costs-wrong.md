---
layout: post
title: "Why Are My ShipStation Shipping Costs Wrong?"
category: "ShipStation"
read_time: "4 min"
---

You open ShipStation, check the billing summary, and your jaw hits the floor. The number doesn't match what you quoted. It doesn't match what your carrier told you. It's just... more. Again.

That was me. Every time I logged in it was a new surprise, a new label to dispute, a new number I couldn't explain. So I went looking.

What I found wasn't a glitch. It was a default.

## ShipStation Has Its Own Rates — And It'll Use Them If You Let It

Here's what's happening: ShipStation has negotiated rates with carriers based on their own volume across all their users. When you create a label, if your connected carrier account isn't set up correctly — or isn't set as the default — ShipStation will quietly fall back to its own rates instead of yours.

The problem is that ShipStation's rates aren't necessarily better than yours. And if you've been with your carrier long enough to negotiate something decent, you're almost certainly paying more than you should.

The extra gets billed to you. ShipStation keeps the spread.

It's not illegal. It's not hidden in the fine print in a way that screams fraud. But it is the kind of thing that costs you real money every month while looking like normal shipping variance.

## What To Check First

Go to **Settings → Carriers** in ShipStation. Look at every carrier you use and verify:

- Your account is connected — not just listed, actually authenticated and pulling live rates
- Your account number is correct and matches what your carrier has on file
- The carrier is set as the rate source for the right ship-from locations
- You haven't accidentally left a ShipStation-managed carrier active alongside your own

That last one is easy to miss. ShipStation adds their own carrier options by default. If yours and theirs are both active for the same service, the rate shown at label creation depends on which one gets surfaced first — and it's not always yours.

## When You Create a Label, Look at the Rate Source

Before you buy, look at where the rate is coming from. ShipStation shows the carrier and service, but it doesn't always make the rate source obvious. If you see a rate that seems off — lower or higher than what you'd expect from your carrier — check whether it's pulling from your account or from ShipStation's contract.

The fastest way to verify: log into your carrier account directly and look up the rate for the same zone, weight, and dimensions. If the numbers don't match, you're not using your rates.

## The Fix

1. Disconnect any ShipStation-managed carrier accounts for services where you have your own
2. Re-authenticate your carrier accounts under Settings → Carriers
3. Create a test label and confirm the rate matches your carrier portal
4. If you use multiple ship-from locations, check each one — the default can vary by location

If you've been overbilled, pull 90 days of label history and compare against your carrier invoice line by line. The discrepancy shows up fast. Most carriers will work with you on a correction if you can show the documentation.

## The Bigger Point

Shipping platforms aren't set up with your best interest as the default. They're set up with their defaults — which keep things running smoothly for them. Sometimes that works in your favor. More often, it's neutral at best and expensive at worst.

Check your rate sources. Compare against your carrier portal. Don't assume the platform is using your negotiated rates just because you connected your account.

Connecting an account and having it configured correctly are two different things.

---

*Running into this? [Let's look at it together.]({{ site.baseurl }}/#contact) A rate audit usually takes less than an hour and the answer is almost always in the carrier settings.*
