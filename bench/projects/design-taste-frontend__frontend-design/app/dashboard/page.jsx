import { RouteNav } from "../components/RouteNav";
import { DashboardBoard } from "../components/DashboardBoard";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <RouteNav active="/dashboard" />
      <DashboardBoard />
    </div>
  );
}
