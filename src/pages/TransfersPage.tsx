import BankingSidebar from '@/components/BankingSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TransfersPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      <div className="flex-1 p-6">
        <Card className="bank-card">
          <CardHeader>
            <CardTitle>Money Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Transfer money to friends, family, or other accounts instantly.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransfersPage;