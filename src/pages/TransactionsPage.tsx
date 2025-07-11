import BankingSidebar from '@/components/BankingSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TransactionsPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      <div className="flex-1 p-6">
        <Card className="bank-card">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View and search your complete transaction history.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionsPage;