import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BankingSidebar from '@/components/BankingSidebar';
import { Eye, EyeOff, CreditCard, Send, Plus, TrendingUp, TrendingDown, Bell, Settings } from 'lucide-react';

const DashboardPage = () => {
  const [showBalance, setShowBalance] = useState(true);

  const recentTransactions = [
    { id: 1, type: 'credit', amount: 2500.00, description: 'Salary Deposit', date: '2024-01-15', category: 'income' },
    { id: 2, type: 'debit', amount: 89.99, description: 'Netflix Subscription', date: '2024-01-14', category: 'entertainment' },
    { id: 3, type: 'debit', amount: 45.32, description: 'Grocery Store', date: '2024-01-14', category: 'food' },
    { id: 4, type: 'credit', amount: 50.00, description: 'Cashback Reward', date: '2024-01-13', category: 'reward' },
    { id: 5, type: 'debit', amount: 1250.00, description: 'Rent Payment', date: '2024-01-12', category: 'housing' }
  ];

  const quickActions = [
    { title: 'Send Money', icon: <Send className="h-6 w-6" />, path: '/transfers', color: 'bg-primary' },
    { title: 'Pay Bills', icon: <CreditCard className="h-6 w-6" />, path: '/payments', color: 'bg-accent' },
    { title: 'Add Money', icon: <Plus className="h-6 w-6" />, path: '/transfers', color: 'bg-success' },
  ];

  return (
    <div className="flex h-screen bg-background">
      <BankingSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6 max-w-7xl mx-auto">
            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="balance-card p-6 shadow-glow">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-primary-foreground/80 text-sm">Total Balance</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowBalance(!showBalance)}
                      className="text-primary-foreground/80 hover:text-primary-foreground"
                    >
                      {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-4xl font-bold text-primary-foreground mb-2">
                    {showBalance ? '$12,458.90' : '••••••'}
                  </p>
                  <div className="flex items-center text-primary-foreground/80">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm">+2.5% this month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bank-card p-6">
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-sm mb-2">Checking Account</p>
                  <p className="text-3xl font-bold mb-2">
                    {showBalance ? '$8,234.56' : '••••••'}
                  </p>
                  <p className="text-accent text-sm">Available Balance</p>
                </CardContent>
              </Card>

              <Card className="bank-card p-6">
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-sm mb-2">Savings Account</p>
                  <p className="text-3xl font-bold mb-2">
                    {showBalance ? '$4,224.34' : '••••••'}
                  </p>
                  <p className="text-success text-sm">2.1% APY</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bank-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common banking tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.path}>
                      <Button 
                        variant="outline" 
                        className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-button transition-all"
                      >
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          {action.icon}
                        </div>
                        <span className="font-medium">{action.title}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <Card className="bank-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest account activity</CardDescription>
                  </div>
                  <Link to="/transactions">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            transaction.type === 'credit' 
                              ? 'bg-success/10 text-success' 
                              : 'bg-destructive/10 text-destructive'
                          }`}>
                            {transaction.type === 'credit' ? 
                              <TrendingUp className="h-4 w-4" /> : 
                              <TrendingDown className="h-4 w-4" />
                            }
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            transaction.type === 'credit' ? 'text-success' : 'text-destructive'
                          }`}>
                            {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                          </p>
                          <Badge variant="secondary" className="text-xs">
                            {transaction.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Spending Overview */}
              <Card className="bank-card">
                <CardHeader>
                  <CardTitle>This Month's Spending</CardTitle>
                  <CardDescription>Breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <span>Food & Dining</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$892.45</p>
                        <p className="text-sm text-muted-foreground">35%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-accent rounded-full"></div>
                        <span>Shopping</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$634.22</p>
                        <p className="text-sm text-muted-foreground">25%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-success rounded-full"></div>
                        <span>Transportation</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$456.78</p>
                        <p className="text-sm text-muted-foreground">18%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-warning rounded-full"></div>
                        <span>Entertainment</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">$234.56</p>
                        <p className="text-sm text-muted-foreground">12%</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between font-semibold">
                        <span>Total Spent</span>
                        <span>$2,218.01</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;