# Vercel Preview Workflow Guide

## Overview
This guide shows you how to preview changes BEFORE merging using Vercel's automatic preview deployments.

---

## 🚀 One-Time Setup

### Step 1: Connect GitHub to Vercel

1. **Go to Vercel:** https://vercel.com
2. **Sign Up/Login:** Use your GitHub account
3. **Import Project:**
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Choose: `wawire/-kq-health-website`
   - Click "Import"

4. **Configure Project:**
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for first deployment
   - You'll get a production URL like: `https://kq-health-website.vercel.app`

### Step 2: Configure GitHub Integration

Vercel automatically:
- ✅ Deploys `main` branch to production
- ✅ Creates preview deployments for ALL pull requests
- ✅ Comments on PRs with preview URLs
- ✅ Updates previews on every commit

**No additional configuration needed!**

---

## 📋 Workflow for Future Changes

### For Claude Code Development:

#### 1. **Create Feature Branch**
Claude will create a new branch like:
```
claude/feature-name-SESSION_ID
```

#### 2. **Make Changes & Commit**
All changes are committed to the feature branch.

#### 3. **Push to GitHub**
```bash
git push -u origin claude/feature-name-SESSION_ID
```

#### 4. **Create Pull Request**
Go to GitHub:
- https://github.com/wawire/-kq-health-website/pulls
- Click "New Pull Request"
- Select:
  - Base: `main`
  - Compare: `claude/feature-name-SESSION_ID`
- Click "Create Pull Request"

#### 5. **AUTOMATIC PREVIEW** ✨
Vercel will automatically:
- Detect the new PR
- Build a preview deployment
- Comment on the PR with a preview URL like:
  ```
  🔍 Preview: https://kq-health-website-git-feature-name.vercel.app
  ```

#### 6. **Review the Preview**
- Click the Vercel preview URL
- Test all changes
- Share with team for feedback
- Make additional commits if needed (preview auto-updates)

#### 7. **Merge When Ready**
Once satisfied with the preview:
- Click "Merge Pull Request" on GitHub
- Vercel automatically deploys to production
- Preview URL becomes inactive

---

## 🎨 Visual Workflow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Create Feature Branch                                   │
│    git checkout -b claude/new-feature-ABC123               │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Make Changes & Commit                                    │
│    - Edit files                                             │
│    - git add .                                              │
│    - git commit -m "feat: ..."                              │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Push to GitHub                                           │
│    git push -u origin claude/new-feature-ABC123             │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Create Pull Request on GitHub                            │
│    Base: main ← Compare: claude/new-feature-ABC123         │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. ✨ VERCEL AUTOMATIC PREVIEW ✨                          │
│    - Vercel detects PR                                      │
│    - Builds preview                                         │
│    - Comments with URL                                      │
│    Preview: https://kq-health-xyz.vercel.app               │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. REVIEW PREVIEW (Don't merge yet!)                        │
│    - Open preview URL                                       │
│    - Test all pages                                         │
│    - Share with stakeholders                                │
│    - Check mobile/desktop                                   │
│    - Verify all features work                               │
└─────────────────────────────────────────────────────────────┘
                         ↓
        ┌───────────────┴───────────────┐
        │                               │
┌───────▼────────┐           ┌─────────▼──────────┐
│ Changes Needed │           │ Looks Good! ✅     │
│                │           │                    │
│ - Make edits   │           │ - Merge PR         │
│ - Commit       │           │ - Deploy to prod   │
│ - Preview      │           │                    │
│   auto-updates │           └────────────────────┘
└────────────────┘
```

---

## 🔍 Example Preview URLs

**Production (main branch):**
```
https://kq-health-website.vercel.app
```

**Preview (PR branches):**
```
https://kq-health-website-git-feature-xyz.vercel.app
https://kq-health-website-git-claude-booking.vercel.app
https://kq-health-website-pr-5.vercel.app
```

---

## 📱 Where to Find Preview URLs

### Option 1: GitHub PR Page
1. Go to your Pull Request
2. Scroll to bottom
3. Look for Vercel bot comment:
   ```
   🔍 Preview: https://...
   ✅ Build successful
   📊 Performance: 98/100
   ```

### Option 2: Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Click "Deployments" tab
4. See all preview deployments with links

### Option 3: GitHub Checks
1. On PR page, click "Checks" tab
2. Find "Vercel" check
3. Click "Details" for preview URL

---

## ⚙️ Advanced Settings

### Environment Variables
Set in Vercel dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL = https://kq-health-website.vercel.app
```

### Preview-Specific Variables
Create different values for preview vs production:
- Production: Use real API keys
- Preview: Use test API keys

### Custom Domains
1. Go to Vercel → Settings → Domains
2. Add your custom domain: `kqhealth.com`
3. Follow DNS configuration steps

---

## 🎯 Best Practices

### DO ✅
- ✅ Always create a PR for changes
- ✅ Wait for Vercel preview to build
- ✅ Test the preview thoroughly
- ✅ Share preview URL with team
- ✅ Check mobile + desktop
- ✅ Verify all navigation works
- ✅ Test forms and interactions
- ✅ Only merge after approval

### DON'T ❌
- ❌ Don't merge without testing preview
- ❌ Don't push directly to main
- ❌ Don't skip PR creation
- ❌ Don't merge if preview fails to build

---

## 🐛 Troubleshooting

### Preview Not Appearing?
**Check:**
1. Is Vercel connected to your GitHub repo?
2. Is the PR from a branch in the same repo (not a fork)?
3. Did the build succeed? Check Vercel logs
4. Wait a few minutes - builds take 2-5 minutes

### Build Failed?
1. Check Vercel build logs
2. Common issues:
   - TypeScript errors
   - Missing dependencies
   - Environment variables
   - Build script errors
3. Fix errors and push new commit
4. Preview rebuilds automatically

### Preview Shows Old Code?
1. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check Vercel deployment time
3. Verify correct branch is deployed
4. Clear browser cache

---

## 📊 Monitoring Previews

### Check Build Status
```bash
# Install Vercel CLI
npm install -g vercel

# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]
```

### GitHub Actions (Optional)
Create `.github/workflows/preview-check.yml`:
```yaml
name: Preview Check
on: [pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

---

## 🎓 Training Your Team

### For Developers:
1. Always work in feature branches
2. Create PR before merging
3. Share preview URL for review
4. Address feedback, preview auto-updates

### For Reviewers/Stakeholders:
1. Click Vercel preview link in PR
2. Test all functionality
3. Check on mobile device
4. Comment on PR with feedback
5. Approve when satisfied

### For Product Owners:
1. Review preview before deployment
2. Verify business requirements
3. Check brand consistency
4. Test user flows
5. Give final approval

---

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **GitHub Integration:** https://vercel.com/docs/git/vercel-for-github

---

## 🚨 Emergency Rollback

If production has issues after merge:

### Option 1: Vercel Dashboard
1. Go to Vercel → Deployments
2. Find previous working deployment
3. Click "⋯" → "Promote to Production"

### Option 2: Git Revert
```bash
git revert HEAD
git push origin main
```

Vercel auto-deploys the revert.

---

## ✅ Checklist for Each PR

Before merging, verify:

- [ ] Preview builds successfully
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Mobile responsive works
- [ ] Forms submit properly
- [ ] Navigation works
- [ ] Images load
- [ ] Animations work
- [ ] Performance is good (check Lighthouse)
- [ ] No broken links
- [ ] Team has reviewed
- [ ] Product owner approved

---

## 🎉 Success!

You now have a professional preview workflow:
1. Create feature branch
2. Push to GitHub
3. Open PR
4. **Review Vercel preview** ← You are here!
5. Get approvals
6. Merge to deploy

**No more surprises in production!** 🚀
