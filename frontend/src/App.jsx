import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ───────── Shared layouts (Member 1) ─────────
import FranchisorLayout from "./components/FranchisorLayout";
import FranchiseeLayout from "./components/FranchiseeLayout";

// ───────── Auth (Member 1) ─────────
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyCode from "./pages/auth/VerifyCode";
import SetNewPassword from "./pages/auth/SetNewPassword";

// ───────── Account pages, used by BOTH roles (Member 2) ─────────
import ProfileOverview from "./pages/account/ProfileOverview";
import EditProfile from "./pages/account/EditProfile";
import NotificationSettings from "./pages/account/NotificationSettings";
import ChangePassword from "./pages/account/ChangePassword";

// ───────── Franchisee: info pages (Member 2) ─────────
import FranchiseeNotifications from "./pages/franchisee/info/FranchiseeNotifications";
import ContractStatus from "./pages/franchisee/info/ContractStatus";
import OutletVisitHistory from "./pages/franchisee/info/OutletVisitHistory";
import FranchiseeAnnouncements from "./pages/franchisee/info/FranchiseeAnnouncements";

// ───────── Franchisor: management (Member 3) ─────────
import FranchisorDashboard from "./pages/franchisor/management/FranchisorDashboard";
import FranchiseeDirectory from "./pages/franchisor/management/FranchiseeDirectory";
import FranchiseeProfile from "./pages/franchisor/management/FranchiseeProfile";
import RegisterFranchisee from "./pages/franchisor/management/RegisterFranchisee";
import BranchMapping from "./pages/franchisor/management/BranchMapping";
import BranchProfile from "./pages/franchisor/management/BranchProfile";

// ───────── Franchisor: monitoring (Member 4) ─────────
import ComplianceMonitoring from "./pages/franchisor/monitoring/ComplianceMonitoring";
import ViolationMonitoring from "./pages/franchisor/monitoring/ViolationMonitoring";
import ContractRenewals from "./pages/franchisor/monitoring/ContractRenewals";
import OutletVisitChecklist from "./pages/franchisor/monitoring/OutletVisitChecklist";

// ───────── Franchisor: insights (Member 5) ─────────
import ReportsAnalytics from "./pages/franchisor/insights/ReportsAnalytics";
import FranchisorAnnouncements from "./pages/franchisor/insights/FranchisorAnnouncements";
import AuditTrail from "./pages/franchisor/insights/AuditTrail";

// ───────── Franchisee: dashboard and compliance (Member 5) ─────────
import FranchiseeDashboard from "./pages/franchisee/compliance/FranchiseeDashboard";
import MyBranches from "./pages/franchisee/compliance/MyBranches";
import ComplianceSubmission from "./pages/franchisee/compliance/ComplianceSubmission";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public / auth (Member 1) ── */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/reset-password/verify" element={<VerifyCode />} />
        <Route path="/reset-password/new" element={<SetNewPassword />} />

        {/* ── Franchisor portal ── */}
        <Route path="/franchisor" element={<FranchisorLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Member 3 */}
          <Route path="dashboard" element={<FranchisorDashboard />} />
          <Route path="directory" element={<FranchiseeDirectory />} />
          <Route path="directory/:franchiseeId" element={<FranchiseeProfile />} />
          <Route path="register" element={<RegisterFranchisee />} />
          <Route path="branches" element={<BranchMapping />} />
          <Route path="branches/:branchId" element={<BranchProfile />} />

          {/* Member 4 */}
          <Route path="compliance" element={<ComplianceMonitoring />} />
          <Route path="violations" element={<ViolationMonitoring />} />
          <Route path="contracts" element={<ContractRenewals />} />
          <Route path="visit-checklist" element={<OutletVisitChecklist />} />

          {/* Member 5 */}
          <Route path="reports" element={<ReportsAnalytics />} />
          <Route path="announcements" element={<FranchisorAnnouncements />} />
          <Route path="audit-trail" element={<AuditTrail />} />

          {/* Member 2 (shared account pages) */}
          <Route path="profile" element={<ProfileOverview />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="settings/notifications" element={<NotificationSettings />} />
          <Route path="settings/password" element={<ChangePassword />} />
        </Route>

        {/* ── Franchisee portal ── */}
        <Route path="/franchisee" element={<FranchiseeLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Member 5 */}
          <Route path="dashboard" element={<FranchiseeDashboard />} />
          <Route path="branches" element={<MyBranches />} />
          {/* :tab = rto-form, training-proof, pre-opening-checklist,
              outlet-visit-docs, business-permit, sanitary-certificate,
              monthly-inspection */}
          <Route path="compliance/:tab?" element={<ComplianceSubmission />} />

          {/* Member 2 */}
          <Route path="notifications" element={<FranchiseeNotifications />} />
          <Route path="contract-status" element={<ContractStatus />} />
          <Route path="visit-history" element={<OutletVisitHistory />} />
          <Route path="announcements" element={<FranchiseeAnnouncements />} />
          <Route path="profile" element={<ProfileOverview />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="settings/notifications" element={<NotificationSettings />} />
          <Route path="settings/password" element={<ChangePassword />} />
        </Route>

        {/* ── 404 ── */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
