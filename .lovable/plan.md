

## Fix Desktop Quiz White Space Issue

### Problem Identified

From your screenshot, the desktop quiz modal shows white empty space below the question content. This happens because:

| Setting | Effect |
|---------|--------|
| `md:bg-background` on modal | Adds white background on desktop |
| `md:h-auto` on modal | Height based on content (not fixed) |
| `md:min-h-[620px]` on modal | Sets minimum 620px height |
| QuestionWrapper content shorter than 620px | White background shows in the gap |

---

### Solution

Remove `md:bg-background` from the modal card so the background image from QuestionWrapper fills the entire container on both mobile AND desktop.

**File: `src/components/quiz/QuizModal.tsx`**

```text
Line 92 - Current:
md:h-auto md:w-full md:bg-background

Change to:
md:h-auto md:w-full
```

This single change ensures:
- Background image fills the entire quiz card on all screen sizes
- No white gaps below the content
- QuestionWrapper's dark overlay remains consistent

---

### Files to Modify

| File | Change |
|------|--------|
| `src/components/quiz/QuizModal.tsx` | Remove `md:bg-background` from line 92 |

---

### Expected Result

- Desktop quiz card shows the background image edge-to-edge
- No white space below the question content
- Consistent appearance between mobile and desktop

