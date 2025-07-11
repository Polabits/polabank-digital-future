import BankingSidebar from '@/components/BankingSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentsPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      <div className="flex-1 p-6">
        <Card className="bank-card">
          <CardHeader>
            <CardTitle>Bill Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pay bills, top-up airtime, and manage recurring payments.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentsPage;