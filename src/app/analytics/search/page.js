"use client"
import { useState } from "react";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter,
  Download,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  DollarSign
} from "lucide-react";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data
const volumeData = [
  { name: "Jan", total: 120000, mobile: 70000, desktop: 50000 },
  { name: "Feb", total: 135000, mobile: 80000, desktop: 55000 },
  { name: "Mar", total: 160000, mobile: 95000, desktop: 65000 },
  { name: "Apr", total: 145000, mobile: 85000, desktop: 60000 },
  { name: "May", total: 190000, mobile: 110000, desktop: 80000 },
  { name: "Jun", total: 220000, mobile: 130000, desktop: 90000 },
  { name: "Jul", total: 250000, mobile: 150000, desktop: 100000 },
  { name: "Aug", total: 210000, mobile: 125000, desktop: 85000 },
  { name: "Sep", total: 180000, mobile: 105000, desktop: 75000 },
  { name: "Oct", total: 230000, mobile: 135000, desktop: 95000 },
  { name: "Nov", total: 260000, mobile: 155000, desktop: 105000 },
  { name: "Dec", total: 200000, mobile: 120000, desktop: 80000 },
];

const topCitiesData = [
  { name: "Mumbai", country: "India", searches: 45000, growth: "+12%" },
  { name: "Delhi", country: "India", searches: 42000, growth: "+8%" },
  { name: "Lagos", country: "Nigeria", searches: 38000, growth: "+15%" },
  { name: "Dubai", country: "UAE", searches: 35000, growth: "+5%" },
  { name: "Bangalore", country: "India", searches: 32000, growth: "+10%" },
  { name: "Shanghai", country: "China", searches: 28000, growth: "+3%" },
  { name: "Hyderabad", country: "India", searches: 25000, growth: "+9%" },
  { name: "Karachi", country: "Pakistan", searches: 22000, growth: "+7%" },
];

const uniBudgetData = [
  { range: "< $10k", value: 15, color: "#64748B" },
  { range: "$10k - $20k", value: 35, color: "#3B82F6" },
  { range: "$20k - $35k", value: 30, color: "#2563EB" },
  { range: "$35k - $50k", value: 15, color: "#1D4ED8" },
  { range: "> $50k", value: 5, color: "#1E3A8A" },
];

const schoolBudgetData = [
  { range: "< $500", value: 20, color: "#64748B" },
  { range: "$500 - $1k", value: 40, color: "#10B981" },
  { range: "$1k - $2k", value: 25, color: "#059669" },
  { range: "$2k - $3k", value: 10, color: "#047857" },
  { range: "> $3k", value: 5, color: "#064E3B" },
];

const topSearchedPrograms = [
  { rank: 1, name: "Data Science Master's", searches: "45,670", change: "+5.4%", trend: "up" },
  { rank: 2, name: "MBA", searches: "42,100", change: "+3.2%", trend: "up" },
  { rank: 3, name: "Computer Science", searches: "36,385", change: "+5.6%", trend: "up" },
  { rank: 4, name: "Digital Marketing", searches: "29,380", change: "+3.2%", trend: "up" },
  { rank: 5, name: "Psychology", searches: "25,890", change: "+3.8%", trend: "up" },
];

export default function SearchAnalytics() {
  return (
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Search Analytics</h1>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              <span>Home</span>
              <span>/</span>
              <span>Analytics</span>
              <span>/</span>
              <span className="text-blue-600 font-medium">Search Analytics</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2 ">
              <Download className="h-4 w-4 " /> Export
            </Button>
            <Button className="gap-2 bg-[#1c1b4b] font-bold">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        {/* Filters Bar */}
        <Card className="shadow-sm border-slate-200">
          <CardContent className="p-4 flex flex-wrap gap-4 items-center">
            <Select defaultValue="30d">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 3 Months</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Program Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="bachelor">{`Bachelor's`}</SelectItem>
                <SelectItem value="master">{`Master's`}</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="china">China</SelectItem>
              </SelectContent>
            </Select>
            <div className="ml-auto flex gap-2">
              <Button variant="default" size="sm" className={"bg-[#1c1b4b] font-bold text-white hover:bg-[#E0AA00]"}>Apply Filters</Button>
              <Button variant="ghost" size="sm" className="bg-[#E0AA00] font-bold text-white hover:bg-[#1c1b4b]">Reset</Button>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "Total Searches", value: "2,456,789", change: "+12.5%", trend: "up" },
            { label: "Unique Searchers", value: "1,234,567", change: "+8.3%", trend: "up" },
            { label: "Avg. Searches/User", value: "1.99", change: "+3.2%", trend: "up" },
            { label: "Conversion Rate", value: "23.4%", change: "+5.1%", trend: "up" },
            { label: "Abandonment", value: "15.2%", change: "-2.3%", trend: "down", good: true },
          ].map((metric, i) => (
            <Card key={i} className="shadow-sm border-slate-200">
              <CardContent className="p-4">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{metric.label}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{metric.value}</span>
                </div>
                <div className={`mt-2 flex items-center text-xs font-medium ${
                  (metric.trend === "up" && !metric.good) || (metric.trend === "down" && metric.good) 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {metric.trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                  {metric.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Chart */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Search Volume Over Time</CardTitle>
            <div className="flex bg-slate-100 rounded-lg p-1">
              {["Day", "Week", "Month", "Quarter", "Year"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                    period === "Month" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={volumeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMobile2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDesktop2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Area type="monotone" dataKey="total" name="Total Searches" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal2)" />
                  <Area type="monotone" dataKey="mobile" name="Mobile" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#colorMobile2)" />
                  <Area type="monotone" dataKey="desktop" name="Desktop" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorDesktop2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* City & Budget Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Cities */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Top Search Origins by City
              </CardTitle>
              <CardDescription>Where your prospective students are located</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={topCitiesData} margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: '#64748B' }} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{ fill: '#F1F5F9' }}
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                    />
                    <Bar dataKey="searches" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={20}>
                      {topCitiesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(217, 91%, ${60 - index * 3}%)`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Budget Preferences */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                Budget Preferences
              </CardTitle>
              <CardDescription>What students are willing to pay</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="university" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="university">University Programs</TabsTrigger>
                  <TabsTrigger value="school">School Tuition (Monthly)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="university">
                  <div className="h-[250px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={uniBudgetData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {uniBudgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-sm text-slate-500 mt-2">Annual Tuition Fee Budget</p>
                </TabsContent>
                
                <TabsContent value="school">
                  <div className="h-[250px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={schoolBudgetData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {schoolBudgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-sm text-slate-500 mt-2">Monthly Tuition Fee Budget</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Programs Table */}
          <Card className="lg:col-span-3 shadow-sm border-slate-200">
            <CardHeader >
              <CardTitle >Top Searched Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[60px]">Rank</TableHead>
                    <TableHead>Program Name</TableHead>
                    <TableHead className="text-right">Searches</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                    <TableHead className="w-[100px]">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSearchedPrograms.map((program) => (
                    <TableRow key={program.rank}>
                      <TableCell className="font-medium">{program.rank}</TableCell>
                      <TableCell>{program.name}</TableCell>
                      <TableCell className="text-right">{program.searches}</TableCell>
                      <TableCell className={`text-right ${program.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {program.change}
                      </TableCell>
                      <TableCell>
                        {/* Mini Sparkline Simulation */}
                        <div className="h-8 w-20 flex items-end gap-[2px]">
                          {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                            <div 
                              key={i} 
                              className={`w-2 rounded-t-sm ${program.trend === "up" ? "bg-blue-100" : "bg-red-100"}`} 
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
