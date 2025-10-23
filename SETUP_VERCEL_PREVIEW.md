# Vercel Preview Setup - Action Items

## 🎯 Goal
Set up Vercel so you can preview ALL future changes before merging to production.

---

## ⚡ Quick Start (15 minutes)

### Step 1: Connect Vercel (5 min)

1. **Visit:** https://vercel.com
2. **Sign up** with your GitHub account
3. **Click:** "Add New" → "Project"
4. **Select:** `wawire/-kq-health-website`
5. **Click:** "Import" (settings are auto-detected)
6. **Click:** "Deploy"
7. **Wait:** 2-3 minutes for first deployment
8. **Done!** You'll get a production URL like:
   ```
   https://kq-health-website.vercel.app
   ```

### Step 2: Test Preview Workflow (10 min)

**On your local machine:**

```bash
# 1. Clone the repo (if you haven't already)
git clone https://github.com/wawire/-kq-health-website.git
cd -kq-health-website

# 2. Pull latest changes
git pull origin main

# 3. Create a test branch
git checkout -b test/vercel-preview-demo

# 4. Make a small change (example)
echo "# Testing Vercel Preview" > TEST_FILE.md

# 5. Commit the change
git add TEST_FILE.md
git commit -m "test: verify Vercel preview workflow"

# 6. Push the branch
git push -u origin test/vercel-preview-demo
```

**On GitHub:**

1. Go to: https://github.com/wawire/-kq-health-website/pulls
2. Click "New Pull Request"
3. Select:
   - Base: `main`
   - Compare: `test/vercel-preview-demo`
4. Click "Create Pull Request"

**What Happens Next (Automatic):**

Within 2-3 minutes, you'll see:

1. ✅ Vercel bot comments on the PR:
   ```
   🔍 Preview: https://kq-health-website-git-test-vercel.vercel.app
   ✅ Build successful
   ```

2. ✅ Click the preview URL to see your changes LIVE
3. ✅ Share this URL with anyone (no login required)
4. ✅ Make more changes → Preview auto-updates

**If Satisfied:**
- Merge the PR → Changes go to production

**If Not:**
- Close the PR → Preview gets deleted
- No changes go to production ✅

---

## 🎨 What This Solves

### Before (What Just Happened with PR #3):
```
❌ Make changes → Push → Merge → Hope it works in production
   (No way to preview before merge)
```

### After (With Vercel):
```
✅ Make changes → Push → Create PR →
   Review preview URL →
   Get team approval →
   Merge with confidence
```

---

## 📊 Preview URL Examples

**Production:**
```
https://kq-health-website.vercel.app
```

**Preview URLs (automatic):**
```
https://kq-health-website-git-feature-booking.vercel.app
https://kq-health-website-git-design-updates.vercel.app
https://kq-health-website-pr-4.vercel.app
```

Each PR gets its own unique preview URL!

---

## 🔄 Daily Workflow (After Setup)

### For Developers:

1. **Create feature branch:**
   ```bash
   git checkout -b feature/new-page
   ```

2. **Make changes & commit:**
   ```bash
   git add .
   git commit -m "feat: add new page"
   ```

3. **Push to GitHub:**
   ```bash
   git push -u origin feature/new-page
   ```

4. **Create PR on GitHub**

5. **Wait for Vercel comment** (2-3 min)

6. **Share preview URL** with stakeholders

7. **Merge when approved**

### For Reviewers:

1. **Get notified** of new PR
2. **Click Vercel preview link** in PR comments
3. **Test the changes** thoroughly
4. **Approve or request changes**
5. **Merge when satisfied**

---

## ✅ Benefits

- ✅ Preview before production
- ✅ Share with non-technical stakeholders
- ✅ Test on real domain (not localhost)
- ✅ Automatic builds
- ✅ No manual deployment
- ✅ Multiple previews simultaneously
- ✅ Production-like environment
- ✅ Free for personal projects

---

## 🐛 Troubleshooting

### Vercel Not Commenting on PR?

**Check:**
1. Is Vercel connected to your GitHub repo?
   - Go to: https://vercel.com/dashboard
   - Check if project is listed

2. Is build successful?
   - Click "Deployments" tab in Vercel
   - Check for errors

3. Wait a few minutes
   - First build takes 3-5 minutes
   - Subsequent builds: 1-2 minutes

### Build Failed?

1. **Check Vercel logs:**
   - Go to failed deployment in Vercel
   - Click "View Function Logs"
   - Fix errors

2. **Common issues:**
   - TypeScript errors
   - Missing dependencies
   - Environment variables

3. **Fix and push:**
   ```bash
   git add .
   git commit -m "fix: resolve build error"
   git push
   ```
   Preview rebuilds automatically!

---

## 📚 Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Full Workflow Guide:** See `VERCEL_PREVIEW_WORKFLOW.md`

---

## 🎯 Success Checklist

- [ ] Vercel account created
- [ ] Repository connected to Vercel
- [ ] First deployment successful
- [ ] Production URL received
- [ ] Test PR created
- [ ] Vercel preview URL received
- [ ] Preview URL tested
- [ ] Team members can access preview
- [ ] Workflow documented for team

---

## 🚀 You're Done!

From now on, every PR will automatically get a preview URL.

**No more deploying to production blindly!** 🎉

---

## ❓ Questions?

Contact your dev team or check:
- Vercel dashboard: https://vercel.com/dashboard
- GitHub PRs: https://github.com/wawire/-kq-health-website/pulls
- Full workflow guide: `VERCEL_PREVIEW_WORKFLOW.md`
