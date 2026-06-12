// App.jsx - Complete Working Version
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, 
  AreaChart, Area, ComposedChart
} from 'recharts';
import * as Icons from 'lucide-react';

// --- Mock Data for Visualizations ---
const automationMetrics = [
  { month: "Jan", manual: 420, automated: 120 },
  { month: "Feb", manual: 380, automated: 150 },
  { month: "Mar", manual: 340, automated: 190 },
  { month: "Apr", manual: 290, automated: 240 },
  { month: "May", manual: 230, automated: 300 },
  { month: "Jun", manual: 180, automated: 350 }
];

const projectData = [
  { id: 1, name: "Customer Churn Prediction", category: "ML", accuracy: 94, impact: "+23% Retention" },
  { id: 2, name: "Swahili NLP Corpus", category: "NLP", size: "50k utterances", impact: "Improved ASR by 18%" },
  { id: 3, name: "Retail Demand Forecast", category: "Time Series", mape: 8.2, impact: "Reduced inventory costs" },
  { id: 4, name: "Clinical Trial Analysis", category: "Statistics", pValue: 0.003, impact: "Published in Lancet" },
  { id: 5, name: "Image Segmentation Pipeline", category: "CV", accuracy: 91, impact: "Automated quality control" }
];

const languageData = [
  { language: "English", proficiency: 100, region: "Global", tasks: "Transcription, NLP, QA" },
  { language: "Swahili", proficiency: 99, region: "East Africa", tasks: "Speech annotation, Translation" },
  { language: "Luo", proficiency: 95, region: "Kenya", tasks: "Audio evaluation" },
  { language: "Kikuyu", proficiency: 90, region: "Kenya", tasks: "Linguistic data labeling" },
  { language: "French", proficiency: 75, region: "International", tasks: "Translation" }
];

// --- Reusable Components ---
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "", hover = true }) => (
  <div className={`bg-yellow-50 rounded-xl border border-yellow-100 shadow-sm ${hover ? 'hover:shadow-md transition-all duration-300 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

// --- Workspace 1: Intelligence Hub ---
const IntelligenceHub = () => {
  const stats = [
    { label: "Projects Completed", value: "47+", icon: Icons.Briefcase, color: "text-teal-600" },
    { label: "AI Models Trained", value: "32", icon: Icons.Brain, color: "text-blue-600" },
    { label: "Languages Supported", value: "8", icon: Icons.Languages, color: "text-purple-600" },
    { label: "Research Papers", value: "12", icon: Icons.FileText, color: "text-orange-600" },
    { label: "Hours Annotated", value: "5.2K+", icon: Icons.Clock, color: "text-green-600" },
    { label: "Client Satisfaction", value: "98%", icon: Icons.Star, color: "text-yellow-600" }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section - Intelligence Dashboard */}
      <div className="bg-linear-to-br from-[#0a1a38] via-[#1a2d54] to-[#1a1a1a] rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Transforming Data into Decisions</h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Joy Wangari · Data Scientist| Intelligence Specialist| Ai trainer #data anotation and labelling skill
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Data Science", "Statistics", "AI Training", "Research", "Automation"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
            <div className="text-3xl font-mono">Analytics</div>
            <div className="text-sm text-gray-400">Live Intelligence Feed</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Expertise Network & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icons.Globe className="w-5 h-5 text-teal-600" /> 
            Core Competencies
          </h3>
          <div className="space-y-3">
            {[
              "Statistical Modeling & Inference",
              "Machine Learning & Predictive Analytics",
              "AI Training & RLHF",
              "Data Annotation & Quality Assurance",
              "Business Process Automation",
              "Research Methodology & Design",
              "Technical Documentation",
              "Multilingual NLP"
            ].map(skill => (
              <div key={skill} className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-700">{skill}</span>
                <Icons.CheckCircle className="w-4 h-4 text-teal-500" />
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Icons.TrendingUp className="w-5 h-5 text-teal-600" /> 
            Professional Trajectory
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={[
              { year: 2020, impact: 45, projects: 8 },
              { year: 2021, impact: 62, projects: 14 },
              { year: 2022, impact: 78, projects: 22 },
              { year: 2023, impact: 89, projects: 35 },
              { year: 2024, impact: 95, projects: 47 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Area yAxisId="left" type="monotone" dataKey="impact" stroke="#0d9488" fill="#14b8a6" fillOpacity={0.2} name="Impact Score" />
              <Line yAxisId="right" type="monotone" dataKey="projects" stroke="#f59e0b" name="Projects Completed" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Research Interests */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icons.Microscope className="w-5 h-5 text-teal-600" /> 
          Active Research Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Causal Inference in Observational Studies",
            "Low-Resource NLP for African Languages",
            "Human-AI Collaboration Frameworks",
            "Bayesian Time Series Forecasting",
            "Ethical AI & Bias Mitigation",
            "Process Mining for Automation"
          ].map(area => (
            <div key={area} className="flex items-center gap-2 text-gray-700">
              <Icons.CircleDot className="w-3 h-3 text-teal-500" />
              <span className="text-sm">{area}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

// --- Workspace 2: Analytics Lab ---
const AnalyticsLab = () => {
  const [filter, setFilter] = useState("all");
  
  const filtered = filter === "all" ? projectData : projectData.filter(p => p.category.toLowerCase() === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {["all", "ml", "nlp", "time series", "statistics", "cv"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-teal-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === "all" ? "All Projects" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(project => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
                <p className="text-gray-500 text-sm mt-1 font-mono">{project.category}</p>
              </div>
              <Icons.ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-teal-600 font-medium">
                {project.impact || `${project.accuracy}% accuracy` || `p=${project.pValue}`}
              </span>
              <div className="flex gap-2">
                {project.category === "ML" && <Icons.Brain className="w-4 h-4 text-gray-400" />}
                {project.category === "NLP" && <Icons.Languages className="w-4 h-4 text-gray-400" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Model Performance Visualization */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icons.Activity className="w-5 h-5 text-teal-600" />
          Model Performance Dashboard
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={[
            { name: "Churn v1", accuracy: 82, precision: 79, recall: 81, f1: 80 },
            { name: "Churn v2", accuracy: 89, precision: 87, recall: 88, f1: 87.5 },
            { name: "Churn v3", accuracy: 94, precision: 93, recall: 92, f1: 92.5 },
            { name: "NLP Model", accuracy: 91, precision: 89, recall: 90, f1: 89.5 },
            { name: "Forecast", accuracy: 88, precision: 86, recall: 87, f1: 86.5 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis domain={[70, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="accuracy" fill="#0d9488" name="Accuracy %" />
            <Line type="monotone" dataKey="f1" stroke="#f59e0b" name="F1 Score" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

// --- Workspace 3: AI Training Operations ---
const AITrainingOps = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "RLHF Projects", count: "18", icon: Icons.ThumbsUp, desc: "Human preference modeling", metric: "92% alignment" },
        { title: "Data Annotation", count: "1.2M", icon: Icons.Pencil, desc: "Images, text, audio labeled", metric: "99.3% IAA" },
        { title: "QA Reviews", count: "45K+", icon: Icons.CheckCircle, desc: "Quality assurance checks", metric: "<2% error rate" },
        { title: "Prompt Engineering", count: "1200+", icon: Icons.MessageSquare, desc: "Optimized prompts", metric: "+34% performance" },
        { title: "Model Evaluation", count: "87", icon: Icons.BarChart, desc: "Benchmark suites", metric: "Comprehensive" },
        { title: "Feedback Loops", count: "15", icon: Icons.Repeat, desc: "Active learning cycles", metric: "Continuous" }
      ].map(item => (
        <Card key={item.title} className="p-6 text-center hover:bg-yellow-100 transition">
          <item.icon className="w-10 h-10 text-teal-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900">{item.count}</div>
          <div className="font-semibold mt-1">{item.title}</div>
          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
          <div className="text-xs text-teal-600 mt-2 font-medium">{item.metric}</div>
        </Card>
      ))}
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Annotation Efficiency</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={automationMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="manual" stroke="#ef4444" name="Manual Hours" strokeWidth={2} />
            <Line type="monotone" dataKey="automated" stroke="#10b981" name="Automated Hours" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-500 mt-4 text-center">↓ 57% reduction in manual effort after automation</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quality Metrics</h3>
        <div className="space-y-4">
          {[
            { label: "Inter-Annotator Agreement", value: 96, target: 90 },
            { label: "Turnaround Time (hours)", value: 4.2, target: 8 },
            { label: "Client Satisfaction", value: 98, target: 95 }
          ].map(metric => (
            <div key={metric.label}>
              <div className="flex justify-between text-sm mb-1">
                <span>{metric.label}</span>
                <span className="font-mono">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${(metric.value / metric.target) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>

    <Card className="p-6 bg-yellow-100 border-yellow-200">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <Icons.Award className="w-5 h-5 text-teal-600" />
        Featured AI Training Project
      </h3>
      <p className="text-gray-700">Led RLHF data collection and quality assurance for a multilingual conversational AI platform, achieving 94% user preference alignment and reducing harmful outputs by 67%.</p>
    </Card>
  </div>
);

// --- Workspace 4: Statistical Research Center ---
const StatisticalResearch = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icons.Sigma className="w-5 h-5 text-teal-600" />
          Statistical Methods
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={[
            { method: "Linear Regression", usage: 95, power: 88 },
            { method: "Logistic Regression", usage: 92, power: 85 },
            { method: "ANOVA", usage: 78, power: 82 },
            { method: "Time Series", usage: 88, power: 90 },
            { method: "Bayesian", usage: 72, power: 87 },
            { method: "Non-parametric", usage: 68, power: 76 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="method" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="usage" fill="#0d9488" name="Usage Frequency %" />
            <Bar dataKey="power" fill="#f59e0b" name="Statistical Power %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Hypothesis Test Outcomes</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={[
              { name: "Significant (p<0.05)", value: 72, color: "#0d9488" },
              { name: "Marginally Significant", value: 15, color: "#f59e0b" },
              { name: "Not Significant", value: 13, color: "#9ca3af" }
            ]} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
              {[
                <Cell key="a" fill="#0d9488" />,
                <Cell key="b" fill="#f59e0b" />,
                <Cell key="c" fill="#9ca3af" />
              ]}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>

    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Research Publications Impact</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 border rounded-lg">
          <div className="text-2xl font-bold text-teal-600">342</div>
          <div className="text-sm text-gray-600">Citations</div>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="text-2xl font-bold text-teal-600">12</div>
          <div className="text-sm text-gray-600">Peer-reviewed Papers</div>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="text-2xl font-bold text-teal-600">8.4</div>
          <div className="text-sm text-gray-600">h-index</div>
        </div>
      </div>
    </Card>
  </div>
);

// --- Workspace 5: Business Intelligence Studio ---
const BusinessIntelligence = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icons.LayoutDashboard className="w-5 h-5 text-teal-600" />
          Executive Dashboard
        </h3>
        <div className="space-y-4">
          {[
            { metric: "Revenue Growth", value: "+23%", trend: "up", target: "+18%" },
            { metric: "Customer Lifetime Value", value: "$2,450", trend: "up", target: "$2,200" },
            { metric: "Churn Rate", value: "3.2%", trend: "down", target: "4%" },
            { metric: "Operational Efficiency", value: "+31%", trend: "up", target: "+25%" }
          ].map(kpi => (
            <div key={kpi.metric} className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-700">{kpi.metric}</span>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">{kpi.value}</span>
                <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.trend === 'up' ? '▲' : '▼'} vs target
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Automation Impact</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={automationMetrics}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="automated" stroke="#0d9488" fill="#14b8a6" fillOpacity={0.3} name="Automated Hours" />
            <Area type="monotone" dataKey="manual" stroke="#ef4444" fill="#fca5a5" fillOpacity={0.3} name="Manual Hours" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>

    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
      <div className="flex flex-wrap gap-3">
        {["Power BI", "Tableau", "Excel", "Python", "SQL", "Power Automate", "R", "SPSS", "SAS"].map(tool => (
          <span key={tool} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{tool}</span>
        ))}
      </div>
    </Card>
  </div>
);

// --- Workspace 6: Language Intelligence Center ---
const LanguageIntelligence = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Icons.Languages className="w-5 h-5 text-teal-600" />
          Language Proficiency
        </h3>
        <div className="space-y-4">
          {languageData.map(lang => (
            <div key={lang.language}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{lang.language}</span>
                <span className="text-gray-500">{lang.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${lang.proficiency}%` }}></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">{lang.tasks}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Transcription Accuracy Metrics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={[
            { language: "English", wer: 2.3, cer: 1.8 },
            { language: "Swahili", wer: 3.8, cer: 2.9 },
            { language: "Code-switch", wer: 5.2, cer: 4.1 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="language" />
            <YAxis label={{ value: "Error Rate %", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="wer" fill="#0d9488" name="Word Error Rate %" />
            <Bar dataKey="cer" fill="#f59e0b" name="Character Error Rate %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>

    <Card className="p-6 bg-yellow-100 border-yellow-200">
      <h3 className="text-lg font-semibold mb-3">Specialized Capabilities</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Speech Annotation", "Audio Evaluation", "Translation Services", "Linguistic Data Labeling", "Sentiment Analysis", "Named Entity Recognition"].map(cap => (
          <div key={cap} className="flex items-center gap-2">
            <Icons.Mic className="w-4 h-4 text-teal-600" />
            <span className="text-sm">{cap}</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// --- Workspace 7: Knowledge & Writing Studio ---
const KnowledgeStudio = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Icons.FileText className="w-5 h-5 text-teal-600" />
          Featured Publications
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">"A Hybrid Approach to Predictive Maintenance"</p>
            <p className="text-sm text-gray-500">Journal of Industrial AI, 2024</p>
            <p className="text-xs text-gray-400 mt-1">Citations: 12</p>
          </div>
          <div>
            <p className="font-medium">"Low-Resource NLP for East African Languages"</p>
            <p className="text-sm text-gray-500">ACL Workshop, 2023</p>
            <p className="text-xs text-gray-400 mt-1">Citations: 28</p>
          </div>
          <div>
            <p className="font-medium">"Causal Inference in Observational Healthcare Data"</p>
            <p className="text-sm text-gray-500">Statistics in Medicine, 2022</p>
            <p className="text-xs text-gray-400 mt-1">Citations: 45</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Icons.BookOpen className="w-5 h-5 text-teal-600" />
          Technical Documentation
        </h3>
        <div className="space-y-3">
          <div className="border-b pb-3">
            <p className="font-medium">API Documentation</p>
            <p className="text-sm text-gray-600">Real-time annotation platform serving 10k+ requests/day</p>
          </div>
          <div className="border-b pb-3">
            <p className="font-medium">User Guides</p>
            <p className="text-sm text-gray-600">Data labeling tool documentation for 500+ users</p>
          </div>
          <div>
            <p className="font-medium">Research Protocols</p>
            <p className="text-sm text-gray-600">Clinical trial statistical analysis plans</p>
          </div>
        </div>
      </Card>
    </div>

    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Writing Services</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Technical Writing", "Research Papers", "Grant Proposals", "Data Reports", "White Papers", "Case Studies", "Documentation", "Blog Posts"].map(service => (
          <div key={service} className="flex items-center gap-2">
            <Icons.PenTool className="w-4 h-4 text-teal-600" />
            <span className="text-sm">{service}</span>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// --- Services Section ---
const Services = () => (
  <div className="space-y-6">
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Icons.Briefcase className="w-6 h-6 text-teal-600" />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Services</h2>
      </div>
      <p className="text-gray-600 max-w-3xl">Problem-solving solutions for your data and research needs</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { problem: "I need actionable insights from my data", solution: "Data Science & Analytics Consulting" },
        { problem: "I need a business dashboard", solution: "Power BI & Visualization" },
        { problem: "I need statistical analysis for research", solution: "Research & Statistical Support" },
        { problem: "I need AI training support", solution: "RLHF & Data Annotation" },
        { problem: "I need multilingual transcription", solution: "Language Intelligence" },
        { problem: "I need business process automation", solution: "Workflow Automation" }
      ].map(service => (
        <Card key={service.problem} className="p-4 hover:bg-yellow-100 transition">
          <div className="flex items-start gap-3">
            <Icons.HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">{service.problem}</p>
              <p className="text-sm text-teal-600 mt-1">→ {service.solution}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// --- Contact Experience - 
const ConsultationRequest = () => {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "",  
    service: "Data Science", 
    message: "",
    contactMethod: "email"
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = {
    email: "njirainijoy831@gmail.com",
    whatsapp: "+254751712840",
    linkedin: "https://www.linkedin.com/in/joy-njiraini-1598a3342/",
    phone: "+254751712840"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    console.log("Form submitted:", form);
    

    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    
    setForm({ 
      name: "", 
      email: "", 
      phone: "", 
      service: "Data Science", 
      message: "",
      contactMethod: "email"
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Joy, I'm interested in your data science and AI training services. I'd like to discuss a project with you.");
    const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Consultation Request - Data Science Services&body=Hi Joy,%0D%0A%0D%0AI'm interested in learning more about your services. Please get back to me when convenient.%0D%0A%0D%0AThanks!`;
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Consultation Request</h2>
        </div>
        <p className="text-gray-600 max-w-3xl">Let's discuss how I can help with your data and research needs</p>
      </div>
      
      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <button
          onClick={handleEmailClick}
          className="flex items-center justify-center gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-xl hover:shadow-md hover:border-teal-300 hover:bg-white transition-all group cursor-pointer"
        >
          <svg className="w-6 h-6 text-teal-600 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="text-left">
            <p className="font-semibold text-gray-900">Email Me</p>
            <p className="text-xs text-gray-500">Get a response within 24hrs</p>
          </div>
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-xl hover:shadow-md hover:border-green-500 hover:bg-white transition-all group cursor-pointer"
        >
          <svg className="w-6 h-6 text-green-600 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div className="text-left">
            <p className="font-semibold text-gray-900">WhatsApp</p>
            <p className="text-xs text-gray-500">Quick chat & responses</p>
          </div>
        </button>
        
        <button
          onClick={handleLinkedInClick}
          className="flex items-center justify-center gap-3 p-4 bg-yellow-50 border border-yellow-100 rounded-xl hover:shadow-md hover:border-blue-600 hover:bg-white transition-all group cursor-pointer"
        >
          <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" stroke="currentColor" />
          </svg>
          <div className="text-left">
            <p className="font-semibold text-gray-900">LinkedIn</p>
            <p className="text-xs text-gray-500">Connect professionally</p>
          </div>
        </button>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-sm text-gray-400">or fill out this form</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-semibold">Request Received!</h3>
              <p className="text-gray-600 mt-2">Thank you for reaching out!</p>
              <p className="text-gray-500 text-sm mt-1">I'll get back to you within 24 hours via your preferred contact method.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="e.g., Joe joe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="joseph@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (for WhatsApp)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  onChange={e => setForm({...form, phone: e.target.value})}
                  placeholder="+254 700 000 000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method
                </label>
                <select
                  value={form.contactMethod}
                  onChange={e => setForm({...form, contactMethod: e.target.value})}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                >
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="phone">Phone Call</option>
                  <option value="linkedin">LinkedIn Message</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={e => setForm({...form, service: e.target.value})}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                >
                  {["Data Science", "AI Training", "Statistical Analysis", "Business Automation", "Transcription Services", "Technical Writing", "Research Consulting"].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  className="w-full p-3 border border-yellow-200 bg-white rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  placeholder="Briefly describe your project, timeline, and any specific requirements..."
                  onChange={e => setForm({...form, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-all cursor-pointer"
              >
                Submit Consultation Request
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                I respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          )}
        </Card>
      </div>

      {/* Contact Info Footer */}
      <div className="text-center space-y-4 pt-4 border-t border-yellow-100">
        <div className="flex justify-center gap-6">
          <button onClick={handleEmailClick} className="text-gray-600 hover:text-teal-600 transition p-2 hover:bg-yellow-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button onClick={handleWhatsAppClick} className="text-gray-600 hover:text-green-600 transition p-2 hover:bg-yellow-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          <button onClick={handleLinkedInClick} className="text-gray-600 hover:text-blue-600 transition p-2 hover:bg-yellow-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" stroke="currentColor" />
            </svg>
          </button>
          <button onClick={handlePhoneClick} className="text-gray-600 hover:text-teal-600 transition p-2 hover:bg-yellow-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>
        <div className="space-y-1">
          <p className="text-gray-500 text-sm">{contactInfo.email}</p>
          <p className="text-gray-500 text-sm">WhatsApp: {contactInfo.whatsapp}</p>
          <p className="text-xs text-gray-400">Response time: Within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

// --- Layout & Navigation Components ---

// Sidebar - Now receives currentPath as a prop instead of using useLocation()
const Sidebar = ({ currentPath }) => {
  const navItems = [
    { path: "/", label: "Intelligence Hub", icon: Icons.LayoutDashboard },
    { path: "/analytics", label: "Analytics Lab", icon: Icons.BarChart3 },
    { path: "/ai-training", label: "AI Training Ops", icon: Icons.Brain },
    { path: "/statistics", label: "Research Center", icon: Icons.Sigma },
    { path: "/bi", label: "BI Studio", icon: Icons.PieChart },
    { path: "/language", label: "Language Center", icon: Icons.Languages },
    { path: "/writing", label: "Writing Studio", icon: Icons.PenTool },
    { path: "/services", label: "Services", icon: Icons.Briefcase },
    { path: "/contact", label: "Consult", icon: Icons.Mail }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-yellow-50 border-r border-yellow-100 z-50 p-6 hidden lg:block overflow-y-auto">
      <div className="flex items-center gap-2 mb-8">
        <Icons.BarChart3 className="w-6 h-6 text-teal-600" />
        <div>
          <span className="font-bold text-lg block">Joy Wangari</span>
          <span className="text-xs text-gray-400">Data Intelligence Studio</span>
        </div>
      </div>
      <nav className="space-y-1">
        {navItems.map(item => (
          <Link key={item.path} to={item.path}>
            <div className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              currentPath === item.path 
                ? 'bg-teal-100 text-teal-700' 
                : 'text-gray-700 hover:bg-yellow-100'
            }`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-6 left-6 right-6 text-xs text-gray-400 border-t pt-4 border-yellow-100">
        <p>Data & Intelligence Ai researcher and trainer</p>
        <p className="mt-1">© 2026 Joy Wangari</p>
      </div>
    </div>
  );
};

// MobileHeader - No changes needed, doesn't use useLocation()
const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Intelligence Hub" },
    { path: "/analytics", label: "Analytics Lab" },
    { path: "/ai-training", label: "AI Training" },
    { path: "/statistics", label: "Research" },
    { path: "/bi", label: "BI Studio" },
    { path: "/language", label: "Language" },
    { path: "/writing", label: "Writing" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Consult" }
  ];
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-yellow-50 border-b border-yellow-100 z-50 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Icons.BarChart3 className="w-5 h-5 text-teal-600" />
        <span className="font-bold">Joy Wangari</span>
      </div>
      <button onClick={() => setOpen(!open)} className="p-2 cursor-pointer">
        <Icons.Menu className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-yellow-50 border-b border-yellow-100 shadow-lg p-4 space-y-2 max-h-[80vh] overflow-y-auto"
          >
            {navItems.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>
                <div className="py-2 px-3 hover:bg-yellow-100 rounded">{item.label}</div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main AppContent Component (runs INSIDE Router) ---
const AppContent = () => {
  const location = useLocation(); // ✅ Safe - inside Router

  return (
    <div className="bg-yellow-50 min-h-screen font-sans antialiased">
      <MobileHeader />
      <Sidebar currentPath={location.pathname} />
      <main className="lg:ml-64 pt-20 lg:pt-12">
        <Container className="py-8">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><IntelligenceHub /></motion.div>} />
              <Route path="/analytics" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><AnalyticsLab /></motion.div>} />
              <Route path="/ai-training" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><AITrainingOps /></motion.div>} />
              <Route path="/statistics" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><StatisticalResearch /></motion.div>} />
              <Route path="/bi" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><BusinessIntelligence /></motion.div>} />
              <Route path="/language" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><LanguageIntelligence /></motion.div>} />
              <Route path="/writing" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><KnowledgeStudio /></motion.div>} />
              <Route path="/services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Services /></motion.div>} />
              <Route path="/contact" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><ConsultationRequest /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </Container>
      </main>
    </div>
  );
};

// --- Main App Component (wraps Router) ---
const App = () => (
  <Router>
    <AppContent />
  </Router>
);
export default App;