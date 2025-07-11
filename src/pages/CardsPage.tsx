import BankingSidebar from '@/components/BankingSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CardsPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      <div className="flex-1 p-6">
        <Card className="bank-card">
          <CardHeader>
            <CardTitle>Your Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your virtual and physical debit/credit cards.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardsPage;