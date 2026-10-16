#!/bin/bash
# Run from inside your frontend folder:  bash create-pages.sh
# Creates a placeholder for every file imported by App.jsx.
# Existing files are NEVER overwritten, so it is safe to re-run.

mkdir -p src/components

page() {
  # usage: page <folder> <ComponentName> <"Page Title"> <member number>
  mkdir -p "src/pages/$1"
  local file="src/pages/$1/$2.jsx"
  if [ -f "$file" ]; then echo "skip   $file"; return; fi
  cat > "$file" <<EOF
// Owner: Member $4
export default function $2() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">$3</h1>
      <p className="text-sm text-gray-500">TODO: build this page from the wireframe.</p>
    </div>
  );
}
EOF
  echo "create $file"
}

layout() {
  # usage: layout <ComponentName> <"Label">
  local file="src/components/$1.jsx"
  if [ -f "$file" ]; then echo "skip   $file"; return; fi
  cat > "$file" <<EOF
// Owner: Member 1
import { Outlet } from "react-router-dom";

export default function $1() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 border-r bg-white p-4">
        <p className="font-bold">LOGO</p>
        <p className="mt-4 text-sm text-gray-500">$2 sidebar (TODO)</p>
      </aside>
      <main className="flex-1">
        <header className="border-b bg-white p-4 text-sm">Topbar (TODO)</header>
        <Outlet />
      </main>
    </div>
  );
}
EOF
  echo "create $file"
}

# ── Layouts (Member 1) ──
layout FranchisorLayout "Franchisor"
layout FranchiseeLayout "Franchisee"

# ── Auth (Member 1) ──
page auth Login "Log In" 1
page auth ForgotPassword "Reset your password" 1
page auth VerifyCode "Check your email" 1
page auth SetNewPassword "Set a new password" 1

# ── Account (Member 2) ──
page account ProfileOverview "Profile Overview" 2
page account EditProfile "Edit profile" 2
page account NotificationSettings "Notification settings" 2
page account ChangePassword "Change password" 2

# ── Franchisee info (Member 2) ──
page franchisee/info FranchiseeNotifications "Notifications" 2
page franchisee/info ContractStatus "Contract status" 2
page franchisee/info OutletVisitHistory "Outlet visit history" 2
page franchisee/info FranchiseeAnnouncements "Announcements" 2

# ── Franchisor management (Member 3) ──
page franchisor/management FranchisorDashboard "Franchisor Dashboard" 3
page franchisor/management FranchiseeDirectory "Franchisee directory" 3
page franchisor/management FranchiseeProfile "Franchisee Profile" 3
page franchisor/management RegisterFranchisee "Register franchisee" 3
page franchisor/management BranchMapping "Branch mapping" 3
page franchisor/management BranchProfile "Branch Profile" 3

# ── Franchisor monitoring (Member 4) ──
page franchisor/monitoring ComplianceMonitoring "Compliance monitoring" 4
page franchisor/monitoring ViolationMonitoring "Violation monitoring" 4
page franchisor/monitoring ContractRenewals "Contract renewals" 4
page franchisor/monitoring OutletVisitChecklist "Outlet visit checklist" 4

# ── Franchisor insights (Member 5) ──
page franchisor/insights ReportsAnalytics "Reports & analytics" 5
page franchisor/insights FranchisorAnnouncements "Announcements" 5
page franchisor/insights AuditTrail "Audit trail" 5

# ── Franchisee dashboard and compliance (Member 5) ──
page franchisee/compliance FranchiseeDashboard "Franchisee Dashboard" 5
page franchisee/compliance MyBranches "My branches" 5
page franchisee/compliance ComplianceSubmission "Compliance submissions" 5

echo ""
echo "Done. Now run: npm run dev"
