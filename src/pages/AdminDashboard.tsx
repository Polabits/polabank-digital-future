import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-background">
      <Card className="bank-card">
        <CardHeader>
          <CardTitle>Admin Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Administrative controls for user management, fraud monitoring, and support.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;