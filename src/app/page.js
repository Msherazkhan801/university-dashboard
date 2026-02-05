"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Users,
  GraduationCap,
  Globe,
  MoreHorizontal,
  Calendar,
  WholeWord,
  Globe2,
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
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

/* ---------------- MOCK DATA ---------------- */

const searchTrendData = [
  { name: "Jan", total: 4000, mobile: 2400 },
  { name: "Feb", total: 3000, mobile: 1398 },
  { name: "Mar", total: 2000, mobile: 9800 },
  { name: "Apr", total: 2780, mobile: 3908 },
  { name: "May", total: 1890, mobile: 4800 },
  { name: "Jun", total: 2390, mobile: 3800 },
  { name: "Jul", total: 3490, mobile: 4300 },
];

const topProgramsData = [
  { name: "Computer Science", value: 45678 },
  { name: "Business Admin", value: 38853 },
  { name: "Engineering", value: 23998 },
  { name: "Data Science", value: 16589 },
  { name: "Medicine", value: 13502 },
];

const educationLevelData = [
  { name: "Bachelor's", value: 45, color: "#3B82F6" },
  { name: "Master's", value: 35, color: "#F59E0B" },
  { name: "PhD", value: 12, color: "#10B981" },
  { name: "Other", value: 8, color: "#64748B" },
];
const recentActivity = [
  { user: "Student X", action: "searched for 'Computer Science'", time: "2 mins ago" },
  { user: "System", action: "New Report Generated for 'University Y'", time: "15 mins ago" },
  { user: "Student Y", action: "searched for 'University Y'", time: "3 mins ago" },
  { user: "Alert", action: "High search volume in 'Data Science'", time: "1 hour ago" },
];

/* ---------------- PAGE ----------------- */

export default function DashboardHome() {
  const [dateRange, setDateRange] = useState("30d");

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 mt-1 mb-4">
            {` Welcome back, here's what's happening with your institution.`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px] bg-white text-black">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 3 Months</SelectItem>
              <SelectItem value="1y">Last Year</SelectItem>
            </SelectContent>
          </Select>

          <Button className={"bg-[#1c1b4b] font-bold text-white"}>Download Report</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {[
          {
            title: "Total Searches",
            value: "2,456,789",
            icon: Search,
            color: "text-blue",
            change: "+12.5%",
          },
          {
            title: "Unique Students",
            value: "1,234,567",
            icon: Users,
            color: "text-orange-700",
            change: "+8.3%",
          },
          {
            title: "Top program",
            value: "Computer Science",
            icon: GraduationCap,
            color: "text-blue-600",
            change: "+8.3%",
            searches:"45,678 searches"
          },
          {
            title: "Top Country",
            value: "🇮🇳 India",
            icon: Globe2,
            color: "text-sky-600",
            change: "+8.3%",
             searches:"45,678 searches"
          },
        ].map((item, i) => (
          <Card
            className="shadow-sm hover:shadow-md transition-shadow border-slate-200"
            key={i}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {item.icon ? (
                    <item.icon className={`h-6 w-6 ${item.color ? item.color :"text-blue-600"}`} />
                  ) : (
                    <Search className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                <span className="flex items-center text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {item.change} <ArrowUpRight className="h-3 w-3 ml-1" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-bold text-slate-500">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-slate-900 mt-1">
                  {item.value}
                </p>
               {item.searches && <p>{item.searches}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Search Trends</CardTitle>
            <CardDescription>Search volume over the last 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={searchTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="total" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
                  <Area type="monotone" dataKey="mobile" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#colorMobile)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Top search origins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden group">
              {/* Placeholder for Map - In a real app, use a map library */}
              <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-700"></div>
              
              {/* Heatmap points simulation */}
              <div className="absolute top-[40%] left-[70%] w-12 h-12 bg-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute top-[35%] left-[20%] w-16 h-16 bg-orange-500 rounded-full blur-xl opacity-50"></div>
              <div className="absolute top-[30%] left-[48%] w-8 h-8 bg-yellow-500 rounded-full blur-xl opacity-60"></div>
              
              <div className="relative z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-xs font-medium text-slate-700">
                Interactive Map Visualization
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>India</span>
                </div>
                <span className="font-medium">35%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span>USA</span>
                </div>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span>China</span>
                </div>
                <span className="font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Top 5 Programs</CardTitle>
            <CardDescription>Most searched academic programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={topProgramsData} margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: '#64748B' }} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: '#F1F5F9' }}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                  />
                  <Bar dataKey="value" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={20}>
                    {topProgramsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={`hsl(217, 91%, ${60 - index * 5}%)`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Student Education Level</CardTitle>
            <CardDescription>Distribution by current degree</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={educationLevelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {educationLevelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
         {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        <Card className="lg:col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-blue-100">Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
              <Search className="mr-2 h-4 w-4" /> Generate New Report
            </Button>
            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
              <Users className="mr-2 h-4 w-4" /> View Competitors
            </Button>
            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
              <Globe className="mr-2 h-4 w-4" /> Set Market Alert
            </Button>
            <Button variant="secondary" className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
              <ArrowDownRight className="mr-2 h-4 w-4" /> Export Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
