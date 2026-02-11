# Report Web Vitals – Complete Guide

---

## Big Picture: What is `reportWebVitals`?

- **`reportWebVitals`** is a helper function that comes with Create React App (CRA) templates.
- Its **only job** is to measure how well your app performs in the browser (performance metrics called **Web Vitals**).
- It is **optional** – your app works fine even if you remove it. It’s there so you *can* measure performance if you want.

In `src/index.js` you have:

```javascript
import reportWebVitals from './reportWebVitals';
reportWebVitals();
```

The **import** brings the function into this file; the **call** at the bottom runs it. By default, with no arguments, it doesn’t do anything visible until you pass a callback.

---

## Step 1: What is a “Web Vital”?

When a user opens your website, they care about:

- **How fast it shows something on the screen**
- **How quickly it reacts when they click or type**
- **Whether the layout suddenly jumps around while loading**

The browser knows a lot of this. Google defined a small set of important metrics called **Web Vitals**. The main ones are:

### LCP (Largest Contentful Paint)

- **What it is:** How long it takes for the main content (big image, heading, block of text) to appear on the screen.
- **Why it matters:** If LCP is slow, the page *feels* slow to the user.

### FID (First Input Delay) / INP (Interaction to Next Paint)

- **What it is:** How long between the user’s first interaction (click, tap, key press) and your app actually responding.
- **Why it matters:** If clicking feels “laggy,” this number will be high.

### CLS (Cumulative Layout Shift)

- **What it is:** Measures how much the page layout “jumps” while loading (e.g. text or images moving).
- **Why it matters:** If things move and the user mis-clicks or gets annoyed, that’s bad CLS.

There are a few more (FCP, TTFB, etc.). Together, these numbers tell you if your app is **fast and smooth** for real users.

---

## Step 2: Where Does `reportWebVitals` Live?

In a CRA app you have something like:

```
src/
  index.js
  reportWebVitals.js
  App.js
  ...
```

The **`reportWebVitals.js`** file (created by CRA) typically looks like this:

```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

**What this does:**

- **`onPerfEntry`** – A callback function *you* can pass in (e.g. `console.log` or send to analytics).
- **`import('web-vitals')`** – Dynamically loads the `web-vitals` library when needed.
- **`getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB`** – Functions from that library that measure each metric.
- Each of these is called with your callback. When a metric is ready, the library calls your callback with a **result object**.

So **`reportWebVitals`** is just a thin wrapper that connects your app to the `web-vitals` library.

---

## Step 3: How Your `index.js` Uses It

Your `index.js` has:

```javascript
reportWebVitals();
```

So you’re calling it **with no arguments**. That means `onPerfEntry` is `undefined`. Inside `reportWebVitals`, the condition:

```javascript
if (onPerfEntry && onPerfEntry instanceof Function)
```

is false, so **nothing runs** – no measurement, no logging. The comment in the file says: *“If you want to start measuring performance… pass a function.”*

---

## Step 4: How to Actually See the Metrics

To start **logging** performance to the console, change the last line to:

```javascript
reportWebVitals(console.log);
```

Now:

- `onPerfEntry` is `console.log`.
- The `web-vitals` functions run and, when each metric is ready, they call `onPerfEntry(metric)`.
- So you’ll see **metric objects** in the browser console, e.g.:

```javascript
{
  name: "CLS",
  value: 0.01,
  id: "v2-1234567890-1",
  delta: 0.01,
  entries: [...],
  rating: "good"
}
```

You can then:

- Use them for **debugging** while developing.
- **Send them to your own analytics** (e.g. POST to your server):

```javascript
function sendToAnalytics(metric) {
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify(metric),
  });
}
reportWebVitals(sendToAnalytics);
```

---

## Step 5: Do You Need It?

**No.** It’s optional. Your app runs fine without it. CRA just gives you a ready-made hook so you can measure performance when you care.

You can:

- **Leave it as is** – no metrics, no overhead.
- **Use it for tuning** – e.g. `reportWebVitals(console.log)`.
- **Wire it to analytics** – send metrics to your backend.
- **Remove it** – delete the import and the call (and optionally the `reportWebVitals.js` file) if you want a minimal setup.

---

## Step 6: Why CRA Added This

- **Google** pushes Web Vitals because they reflect real user experience and can affect SEO.
- CRA wants to encourage **good performance habits**.
- So the template includes a simple function and a comment telling you how to use it, plus a link to learn more: https://bit.ly/CRA-vitals

---

## Step 7: Summary in One Sentence

**`reportWebVitals`** is an optional helper that, when you pass it a function, reports your app’s Web Vitals (LCP, FID, CLS, etc.) to that function so you can log them or send them to analytics.

---

*Generated for the Namaste YouTube (Create React App) project.*
