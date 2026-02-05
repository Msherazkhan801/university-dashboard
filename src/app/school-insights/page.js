"use client" 
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  BookOpen,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  Activity
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock Data for School Insights
const curriculumInterestData = [
  { subject: "STEM", A: 120, B: 110, fullMark: 150 },
  { subject: "Arts", A: 98, B: 130, fullMark: 150 },
  { subject: "Business", A: 86, B: 130, fullMark: 150 },
  { subject: "Languages", A: 99, B: 100, fullMark: 150 },
  { subject: "Sports", A: 85, B: 90, fullMark: 150 },
  { subject: "Social Sci", A: 65, B: 85, fullMark: 150 },
];

const gradeLevelDemandData = [
  { name: "Pre-K", value: 15 },
  { name: "Elementary", value: 25 },
  { name: "Middle", value: 20 },
  { name: "High School", value: 40 },
];

const extracurricularTrends = [
  { name: "Robotics", value: 85, trend: "+15%" },
  { name: "Debate Club", value: 65, trend: "+8%" },
  { name: "Coding", value: 90, trend: "+20%" },
  { name: "Music", value: 60, trend: "+5%" },
  { name: "Drama", value: 45, trend: "-2%" },
];

const marketingChannelEffectiveness = [
  { name: "Social Media", value: 45 },
  { name: "Search Ads", value: 30 },
  { name: "Email", value: 15 },
  { name: "Referrals", value: 10 },
];

export default function SchoolInsights() {
  return (
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">School Insights</h1>
            <p className="text-slate-500 mt-1">Data-driven insights for curriculum, marketing, and admissions.</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="this_year">
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this_year">2025-2026</SelectItem>
                <SelectItem value="last_year">2024-2025</SelectItem>
              </SelectContent>
            </Select>
            <Button className={"bg-[#1c1b4b] font-bold text-white"}>Download Report</Button>
          </div>
        </div>

        {/* KPI Cards for Decision Making */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-sm border-slate-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Target className="h-5 w-5 text-[#1c1b4b]" />
                </div>
                <h3 className="font-semibold text-blue-900">Curriculum Focus</h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">STEM & Coding</p>
              <p className="text-sm text-slate-600 mt-1">Highest growing interest areas (+22% YoY)</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-green-900">Admission Demand</h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">High School</p>
              <p className="text-sm text-slate-600 mt-1">Grade 9-12 sees 40% of total searches</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-purple-900">Marketing Insight</h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">Social Media</p>
              <p className="text-sm text-slate-600 mt-1">Most effective channel for parent engagement</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-orange-900">Competitive Index</h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">Top 15%</p>
              <p className="text-sm text-slate-600 mt-1">Your school ranks high in local search visibility</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Curriculum Interest Radar Chart */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Curriculum Interest vs. Market Average</CardTitle>
              <CardDescription>{`Compare interest in your school's offerings against market trends`}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={curriculumInterestData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Your School" dataKey="A" stroke="#2563EB" fill="#2563EB" fillOpacity={0.6} />
                    <Radar name="Market Avg" dataKey="B" stroke="#94A3B8" fill="#94A3B8" fillOpacity={0.3} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Grade Level Demand Bar Chart */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Search Demand by Grade Level</CardTitle>
              <CardDescription>Which grades are parents searching for most?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gradeLevelDemandData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{ fill: '#F1F5F9' }} />
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                      {gradeLevelDemandData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 3 ? "#2563EB" : "#93C5FD"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section: Extracurriculars & Marketing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Extracurricular Activities Trends</CardTitle>
              <CardDescription>Rising interest in student activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {extracurricularTrends.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{item.name}</span>
                      <span className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.trend}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle>Marketing Channel Impact</CardTitle>
              <CardDescription>Where parents find you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketingChannelEffectiveness} layout="vertical" margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                     {/* Using AreaChart as a placeholder for a funnel-like visualization or just simple bars */}
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" width={100} />
                     <Tooltip />
                     <Area dataKey="value" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                  {/* Replaced with a simple list for clarity as Recharts funnel is complex */}
                </ResponsiveContainer>
              </div>
              <div className="space-y-4 mt-4">
                 {marketingChannelEffectiveness.map((channel, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
                     <span className="text-sm text-slate-600">{channel.name}</span>
                     <span className="font-bold text-slate-900">{channel.value}%</span>
                   </div>
                 ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
