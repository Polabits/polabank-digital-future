import BankingSidebar from '@/components/BankingSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      <div className="flex-1 p-6">
        <Card className="bank-card">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your account preferences, security, and notifications.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;