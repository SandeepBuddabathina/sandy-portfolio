import { Component } from '@angular/core';

export type TemplateLayoutType = 'saas' | 'ott' | 'video';

export interface LandingTheme {
  id: string; name: string; description: string;
  category: TemplateLayoutType; type: TemplateLayoutType; style: string;
  defaults: LandingContent;
}

export interface LandingContent {
  brand: string; headline: string; description: string; buttonText: string;
  navOne: string; navTwo: string; mediaUrl: string; mediaType: 'video' | 'image';
  accentColor?: string;
  subscriptionPrice?: string;
  movie1Title?: string; movie1Url?: string;
  movie2Title?: string; movie2Url?: string;
  movie3Title?: string; movie3Url?: string;
  genreTag?: string;
  extraVideos?: Array<{ title: string; url: string }>;

  // Video Studio Fields
  reel1Title?: string; reel1Url?: string;
  reel2Title?: string; reel2Url?: string;
  awardsCount?: string; clientCount?: string;

  // Expanded SaaS Fields for 5+ Sections
  badgeText?: string;
  featureOneTitle?: string; featureOneDesc?: string;
  featureTwoTitle?: string; featureTwoDesc?: string;
  featureThreeTitle?: string; featureThreeDesc?: string;
  featureFourTitle?: string; featureFourDesc?: string;
  metric1Val?: string; metric1Label?: string;
  metric2Val?: string; metric2Label?: string;
  metric3Val?: string; metric3Label?: string;
  starterPrice?: string; proPrice?: string; enterprisePrice?: string;
  testimonialQuote?: string; testimonialAuthor?: string;
}

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
  categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'saas', label: 'SaaS & Tech Platform' },
    { id: 'ott', label: 'OTT Cinema Streaming' },
    { id: 'video', label: 'Video Production Studio' }
  ];

  selectedCategory = 'all';

  themes: LandingTheme[] = [
    {
      id: 'aurora', name: 'Aurora SaaS AI', category: 'saas', type: 'saas', description: '5-Section AI Workspace Landing Page', style: 'aurora',
      defaults: {
        brand: 'Nexora AI', badgeText: 'NEXT-GEN AI WORKSPACE 2.0',
        headline: 'Automate Workflows & Build Products 10x Faster',
        description: 'The unified AI workspace for engineering, product, and design teams. Deploy autonomous AI agents in minutes.',
        buttonText: 'Start Free 14-Day Trial', navOne: 'Features', navTwo: 'Pricing',
        accentColor: '#6366f1',
        mediaUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format', mediaType: 'image',
        featureOneTitle: 'Autonomous AI Agents', featureOneDesc: 'Deploy self-executing AI pipelines that automate code reviews, testing, and deployment.',
        featureTwoTitle: 'Enterprise Security', featureTwoDesc: 'SOC2 Type II certified with end-to-end encryption and zero data retention guarantees.',
        featureThreeTitle: 'Real-Time Analytics', featureThreeDesc: 'Monitor token consumption, agent throughput, and latency with millisecond precision.',
        featureFourTitle: 'Collaborative Canvas', featureFourDesc: 'Real-time multi-user prompt editing, version control, and instant preview sandboxes.',
        metric1Val: '99.99%', metric1Label: 'Uptime SLA',
        metric2Val: '10M+', metric2Label: 'Tasks Automated',
        metric3Val: '< 15ms', metric3Label: 'Average Latency',
        starterPrice: '$29/mo', proPrice: '$79/mo', enterprisePrice: 'Custom',
        testimonialQuote: '"Nexora transformed our dev workflow. We shipped 3 major features in 1 week!"',
        testimonialAuthor: 'Alex Chen, CTO at TechScale'
      }
    },
    {
      id: 'midnight', name: 'Midnight Cloud SaaS', category: 'saas', type: 'saas', description: 'Dark-tech Cloud Compute & AI Platform', style: 'midnight',
      defaults: {
        brand: 'Orbit Cloud', badgeText: 'HIGH PERFORMANCE COMPUTE',
        headline: 'Serverless Infrastructure Powered by Neural GPUs',
        description: 'Scale LLM inference and distributed AI models effortlessly across global edge nodes with instant cold starts.',
        buttonText: 'Deploy Cluster Now', navOne: 'Nodes', navTwo: 'Benchmarks',
        accentColor: '#a78bfa',
        mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format', mediaType: 'image',
        featureOneTitle: 'Instant Cold Starts', featureOneDesc: 'Sub-50ms execution initialization for serverless AI models and containerized functions.',
        featureTwoTitle: 'Global Mesh Network', featureTwoDesc: 'Deploy workloads across 350+ edge locations worldwide for minimum latency.',
        featureThreeTitle: 'Dynamic Auto-Scaling', featureThreeDesc: 'Scale seamlessly from 0 to 100,000 requests per second with micro-billing.',
        featureFourTitle: 'DDoS & WAF Protection', featureFourDesc: 'Built-in DDoS mitigation, zero-trust network access, and automated SSL certs.',
        metric1Val: '350+', metric1Label: 'Edge Data Centers',
        metric2Val: '4.9/5', metric2Label: 'Developer Rating',
        metric3Val: '50ms', metric3Label: 'Global Latency',
        starterPrice: '$49/mo', proPrice: '$149/mo', enterprisePrice: '$499/mo',
        testimonialQuote: '"Orbit Cloud halved our GPU infrastructure costs while improving global response times."',
        testimonialAuthor: 'Elena Rostova, VP Infrastructure at DataFlow'
      }
    },
    {
      id: 'quantum', name: 'Quantum DevTools', category: 'saas', type: 'saas', description: 'Modern Developer IDE & Code Intelligence', style: 'quantum',
      defaults: {
        brand: 'Quantum IDE', badgeText: 'COPILOT FOR INFRASTRUCTURE',
        headline: 'Next-Generation Code Intelligence & Cloud Studio',
        description: 'Empower your engineering team with contextual code completions, automated refactoring, and instant CI/CD preview environments.',
        buttonText: 'Install Extension', navOne: 'Docs', navTwo: 'Integrations',
        accentColor: '#38bdf8',
        mediaUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format', mediaType: 'image',
        featureOneTitle: 'Contextual Code AI', featureOneDesc: 'Understands your entire repository AST to provide hyper-accurate code suggestions.',
        featureTwoTitle: 'Automated Refactoring', featureTwoDesc: 'Detect and refactor legacy code smells, security vulnerabilities, and memory leaks.',
        featureThreeTitle: 'Instant Cloud Sandboxes', featureThreeDesc: 'Spin up isolated preview environments for PRs in under 3 seconds.',
        featureFourTitle: 'Git Native Workflow', featureFourDesc: 'Deep integration with GitHub, GitLab, Bitbucket, and custom Git providers.',
        metric1Val: '500K+', metric1Label: 'Active Devs',
        metric2Val: '3x', metric2Label: 'Faster PR Reviews',
        metric3Val: '100%', metric3Label: 'Open Source Engine',
        starterPrice: 'Free', proPrice: '$19/dev', enterprisePrice: '$49/dev',
        testimonialQuote: '"Quantum IDE is the single biggest productivity booster our dev team has experienced."',
        testimonialAuthor: 'Marcus Vance, Lead Architect'
      }
    },
    {
      id: 'cineflix', name: 'CineFlix OTT', category: 'ott', type: 'ott', description: 'Netflix-style streaming platform with movie grid', style: 'cinema',
      defaults: {
        brand: 'CineFlix', headline: 'Unlimited Movies, Shows & Live Originals',
        description: 'Watch anywhere. Cancel anytime. Stream 4K HDR blockbusters with Dolby Atmos sound.',
        buttonText: 'Start Free 30-Day Trial', navOne: 'Movies', navTwo: 'Series',
        accentColor: '#e11d48',
        mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', mediaType: 'video',
        subscriptionPrice: '$9.99/mo', genreTag: 'ACTION / SCI-FI',
        movie1Title: 'Tears of Steel Trailer', movie1Url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        movie2Title: 'Sintel 4K Trailer', movie2Url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        movie3Title: 'Big Buck Bunny', movie3Url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        extraVideos: []
      }
    },
    {
      id: 'reel-studio', name: 'ReelMaster Studio', category: 'video', type: 'video', description: 'Video production & showreel portfolio', style: 'reel',
      defaults: {
        brand: 'ReelMaster Studio', headline: 'High-Impact Video Production & Commercials',
        description: 'We craft viral video ads, 4K drone cinematography, and brand documentaries.',
        buttonText: 'Hire Our Crew', navOne: 'Showreel', navTwo: 'Projects',
        accentColor: '#f97316',
        mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', mediaType: 'video',
        reel1Title: 'Brand Commercial', reel1Url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback2012.mp4',
        reel2Title: 'Aerial Expedition', reel2Url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        awardsCount: '24 Global Awards', clientCount: '150+ Brands', extraVideos: []
      }
    }
  ];

  selectedTheme = this.themes[0];
  content: LandingContent = { ...this.selectedTheme.defaults };

  get filteredThemes() { return this.selectedCategory === 'all' ? this.themes : this.themes.filter(t => t.category === this.selectedCategory); }

  setCategory(id: string) { this.selectedCategory = id; }

  selectTheme(theme: LandingTheme) {
    this.selectedTheme = theme;
    this.content = { ...theme.defaults };
    if (!this.content.extraVideos) { this.content.extraVideos = []; }
  }

  addExtraVideo() {
    if (!this.content.extraVideos) { this.content.extraVideos = []; }
    this.content.extraVideos = [...this.content.extraVideos, { title: 'New Video', url: '' }];
  }

  removeExtraVideo(i: number) {
    this.content.extraVideos = (this.content.extraVideos || []).filter((_, idx) => idx !== i);
  }

  getYoutubeEmbedUrl(url: string): string {
    if (!url) return '';
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    const id = (watchMatch || shortMatch)?.[1];
    if (id) {
      return `https://www.youtube.com/embed/${id}?controls=1&rel=0`;
    }
    return '';
  }

  isYoutubeUrl(url: string): boolean { return !!this.getYoutubeEmbedUrl(url); }

  handleButtonClick(actionName?: string): void {
    const label = actionName || 'Feature';
    alert(`Interactive Feature Triggered: ${label} on ${this.content.brand || 'Website'}!`);
  }

  openFullPreview(): void {
    localStorage.setItem('portfolio-theme-preview', JSON.stringify({ style: this.selectedTheme.style, type: this.selectedTheme.type, content: this.content }));
    window.open('/build/preview', '_blank');
  }

  downloadTheme(): void {
    const files = [
      { name: 'index.html', content: this.createHtml() },
      { name: 'styles.css', content: this.createCss() },
      { name: 'script.js', content: this.createJs() }
    ];
    const zip = this.createZip(files);
    const url = URL.createObjectURL(new Blob([zip as unknown as BlobPart], { type: 'application/zip' }));
    const a = document.createElement('a');
    a.href = url; a.download = `${this.selectedTheme.id}.zip`; a.click();
    URL.revokeObjectURL(url);
  }

  private createHtml(): string {
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.content.brand}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="${this.selectedTheme.style}">
  <header>
    <div class="brand">${this.content.brand}</div>
    <div class="nav-cta">
      <button class="cta-btn-ghost" onclick="openAuthModal('signin')">Sign In</button>
      <button class="cta-btn" onclick="openAuthModal('register')">${this.content.buttonText}</button>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="badge">${this.content.badgeText || 'FEATURED'}</div>
      <h1>${this.content.headline}</h1>
      <p>${this.content.description}</p>
      <button class="cta-btn-lg" onclick="openAuthModal('register')">Get Started Now</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>`;
  }

  private createCss(): string {
    const color = this.content.accentColor || '#6366f1';
    return `*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif;background:#030712;color:#fff}header{display:flex;justify-content:space-between;align-items:center;padding:1.5rem 5%;background:rgba(3,7,18,0.9)}.brand{font-size:1.5rem;font-weight:900;color:${color}}.nav-cta{display:flex;gap:1rem}.cta-btn-ghost{background:transparent;border:none;color:#cbd5e1;font-weight:700;cursor:pointer}.cta-btn,.cta-btn-lg{padding:0.8rem 1.6rem;border-radius:999px;border:none;background:${color};color:#fff;font-weight:800;cursor:pointer;transition:transform 0.2s}.cta-btn:hover,.cta-btn-lg:hover{transform:scale(1.04)}.hero{text-align:center;padding:5rem 5%}.badge{display:inline-block;padding:0.3rem 0.8rem;background:rgba(255,255,255,0.1);border-radius:999px;font-size:0.8rem;font-weight:800;color:${color};margin-bottom:1rem}h1{font-size:3.5rem;font-weight:900;line-height:1.1;margin-bottom:1.5rem}p{font-size:1.2rem;color:#94a3b8;max-width:600px;margin:0 auto 2rem}`;
  }

  private createJs(): string {
    return `// Interactive JavaScript for ${this.content.brand}
document.addEventListener('DOMContentLoaded', () => {
  console.log('${this.content.brand} website ready.');
});
`;
  }

  private createZip(files: Array<{name:string;content:string}>): Uint8Array {
    const encoder = new TextEncoder(); const parts: Uint8Array[] = []; const central: Uint8Array[] = []; let offset = 0;
    for (const file of files) {
      const name = encoder.encode(file.name); const data = encoder.encode(file.content); const crc = this.crc32(data);
      const header = new Uint8Array(30); const local = new DataView(header.buffer);
      local.setUint32(0,0x04034b50,true); local.setUint16(4,20,true); local.setUint32(14,crc,true);
      local.setUint32(18,data.length,true); local.setUint32(22,data.length,true); local.setUint16(26,name.length,true);
      parts.push(header,name,data);
      const directory = new Uint8Array(46); const entry = new DataView(directory.buffer);
      entry.setUint32(0,0x02014b50,true); entry.setUint16(4,20,true); entry.setUint16(6,20,true);
      entry.setUint32(16,crc,true); entry.setUint32(20,data.length,true); entry.setUint32(24,data.length,true);
      entry.setUint16(28,name.length,true); entry.setUint32(42,offset,true);
      central.push(directory,name); offset += header.length + name.length + data.length;
    }
    const centralSize = central.reduce((s,p)=>s+p.length,0);
    const end = new Uint8Array(22); const de = new DataView(end.buffer);
    de.setUint32(0,0x06054b50,true); de.setUint16(8,files.length,true); de.setUint16(10,files.length,true);
    de.setUint32(12,centralSize,true); de.setUint32(16,offset,true);
    parts.push(...central,end);
    const zip = new Uint8Array(parts.reduce((s,p)=>s+p.length,0)); let pos=0;
    parts.forEach(p=>{zip.set(p,pos);pos+=p.length;}); return zip;
  }
  private crc32(data: Uint8Array): number { let crc=0xffffffff; for(const b of data){crc^=b;for(let i=0;i<8;i++)crc=(crc>>>1)^(crc&1?0xedb88320:0);} return(crc^0xffffffff)>>>0; }
}
