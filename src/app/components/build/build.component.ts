import { Component } from '@angular/core';

interface LandingTheme {
  id: string;
  name: string;
  description: string;
  style: 'aurora' | 'midnight' | 'studio' | 'bloom';
  defaults: LandingContent;
}

interface LandingContent {
  brand: string;
  headline: string;
  description: string;
  buttonText: string;
  navOne: string;
  navTwo: string;
  sectionTitle: string;
  sectionDescription: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  testimonial: string;
}

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent {
  themes: LandingTheme[] = [
    { id: 'aurora', name: 'Aurora', description: 'Bright SaaS launch page', style: 'aurora', defaults: this.contentFor('Nexora', 'Build products people love.', 'The simple workspace for ambitious teams to plan, create, and grow.', 'Start for free') },
    { id: 'midnight', name: 'Midnight', description: 'Confident dark-tech page', style: 'midnight', defaults: this.contentFor('Orbit', 'Your next idea starts here.', 'Bring your best work into focus with tools made for modern creators.', 'Explore Orbit') },
    { id: 'studio', name: 'Studio', description: 'Clean creative portfolio page', style: 'studio', defaults: this.contentFor('Folio', 'Design with a point of view.', 'A small independent studio making memorable digital experiences.', 'View our work') },
    { id: 'bloom', name: 'Bloom', description: 'Warm wellness brand page', style: 'bloom', defaults: this.contentFor('Bloom', 'A better rhythm for every day.', 'Thoughtful essentials for a calmer, more intentional life.', 'Shop the collection') }
  ];

  selectedTheme = this.themes[0];
  content: LandingContent = { ...this.selectedTheme.defaults };

  selectTheme(theme: LandingTheme): void {
    this.selectedTheme = theme;
    this.content = { ...theme.defaults };
  }

  downloadTheme(): void {
    const files = [
      { name: 'index.html', content: this.createHtml() },
      { name: 'styles.css', content: this.createCss() }
    ];
    const zip = this.createZip(files);
    const url = URL.createObjectURL(new Blob([zip], { type: 'application/zip' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.selectedTheme.id}-landing-page.zip`;
    link.click();
    URL.revokeObjectURL(url);
  }

  openFullPreview(): void {
    localStorage.setItem('portfolio-theme-preview', JSON.stringify({ style: this.selectedTheme.style, content: this.content }));
    window.open('/build/preview', '_blank');
  }

  private createHtml(): string {
    const value = (text: string) => this.escapeHtml(text);
    return `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${value(this.content.brand)}</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body class="${this.selectedTheme.style}">\n  <main class="hero"><nav><a class="brand" href="#">${value(this.content.brand)}</a><div><a href="#features">${value(this.content.navOne)}</a><a href="#stories">${value(this.content.navTwo)}</a></div></nav><section class="hero-content"><p class="eyebrow">MAKE YOUR MARK</p><h1>${value(this.content.headline)}</h1><p class="description">${value(this.content.description)}</p><a class="cta" href="#features">${value(this.content.buttonText)} <span>→</span></a></section></main>\n  <section class="intro"><p class="eyebrow">BUILT FOR MOMENTUM</p><h2>${value(this.content.sectionTitle)}</h2><p>${value(this.content.sectionDescription)}</p></section>\n  <section class="features" id="features"><article><b>01</b><h3>${value(this.content.featureOne)}</h3><p>Everything you need, beautifully organized in one focused place.</p></article><article><b>02</b><h3>${value(this.content.featureTwo)}</h3><p>Move from your first idea to your best work without friction.</p></article><article><b>03</b><h3>${value(this.content.featureThree)}</h3><p>Make better decisions with a clear view of what matters.</p></article></section>\n  <section class="quote" id="stories"><p>“${value(this.content.testimonial)}”</p><b>— A happy customer</b></section><footer>Created by Sandeep B.</footer>\n</body>\n</html>`;
  }

  private createCss(): string {
    const palettes: Record<LandingTheme['style'], string> = {
      aurora: ':root{--bg:#eef2ff;--ink:#172554;--accent:#4f46e5;--soft:#c7d2fe}',
      midnight: ':root{--bg:#09090f;--ink:#f8fafc;--accent:#a78bfa;--soft:#24243a}',
      studio: ':root{--bg:#f8f7f4;--ink:#191919;--accent:#ea580c;--soft:#fed7aa}',
      bloom: ':root{--bg:#fff7ed;--ink:#3f2a1d;--accent:#c2416c;--soft:#fecdd3}'
    };
    return `${palettes[this.selectedTheme.style]}\n*{box-sizing:border-box}body{margin:0;font-family:'Noto Sans',sans-serif;background:var(--bg);color:var(--ink)}.hero{min-height:100vh;padding:28px 8%;background:radial-gradient(circle at 85% 20%,var(--soft),transparent 30%)}nav{display:flex;justify-content:space-between;align-items:center;gap:1rem}.brand{font-weight:800;font-size:1.4rem;color:inherit;text-decoration:none}nav div{display:flex;gap:1.3rem}nav div a{color:inherit;text-decoration:none}.hero-content{max-width:780px;padding:13rem 0 5rem}.eyebrow{font-weight:700;letter-spacing:.14em;color:var(--accent)}h1{font-size:clamp(3rem,8vw,6.6rem);line-height:.98;letter-spacing:-.06em;margin:.6rem 0 1.5rem}.description,.intro>p{font-size:1.2rem;line-height:1.65;max-width:580px}.cta{display:inline-flex;gap:1rem;margin-top:2rem;padding:1rem 1.35rem;border-radius:999px;background:var(--accent);color:white;font-weight:700;text-decoration:none}.intro{padding:8rem 8%;max-width:900px}.intro h2{font-size:clamp(2.5rem,5vw,4.5rem);letter-spacing:-.05em;margin:.6rem 0}.features{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--soft)}article{padding:3rem 8%;background:var(--bg)}article b{color:var(--accent)}article h3{font-size:1.7rem}.quote{padding:8rem 15%;text-align:center;background:var(--soft);font-size:clamp(1.8rem,4vw,3.8rem);font-weight:700;line-height:1.1}.quote b{font-size:1rem}.quote p{margin:0 0 1.5rem}footer{padding:2rem 8%;text-align:center;font-weight:700}@media(max-width:600px){.hero{padding:24px}.hero-content{padding-top:9rem}.features{grid-template-columns:1fr}.intro{padding:5rem 24px}}`;
  }

  private escapeHtml(value: string): string {
    return value.replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char));
  }

  private createZip(files: Array<{ name: string; content: string }>): Uint8Array {
    const encoder = new TextEncoder();
    const parts: Uint8Array[] = [];
    const central: Uint8Array[] = [];
    let offset = 0;
    for (const file of files) {
      const name = encoder.encode(file.name); const data = encoder.encode(file.content); const crc = this.crc32(data);
      const header = new Uint8Array(30); const local = new DataView(header.buffer);
      local.setUint32(0, 0x04034b50, true); local.setUint16(4, 20, true); local.setUint32(14, crc, true);
      local.setUint32(18, data.length, true); local.setUint32(22, data.length, true); local.setUint16(26, name.length, true);
      parts.push(header, name, data);
      const directory = new Uint8Array(46); const entry = new DataView(directory.buffer);
      entry.setUint32(0, 0x02014b50, true); entry.setUint16(4, 20, true); entry.setUint16(6, 20, true);
      entry.setUint32(16, crc, true); entry.setUint32(20, data.length, true); entry.setUint32(24, data.length, true);
      entry.setUint16(28, name.length, true); entry.setUint32(42, offset, true);
      central.push(directory, name);
      offset += header.length + name.length + data.length;
    }
    const centralSize = central.reduce((size, part) => size + part.length, 0);
    const end = new Uint8Array(22); const directoryEnd = new DataView(end.buffer);
    directoryEnd.setUint32(0, 0x06054b50, true); directoryEnd.setUint16(8, files.length, true); directoryEnd.setUint16(10, files.length, true);
    directoryEnd.setUint32(12, centralSize, true); directoryEnd.setUint32(16, offset, true);
    parts.push(...central, end);
    const zip = new Uint8Array(parts.reduce((size, part) => size + part.length, 0)); let position = 0;
    parts.forEach(part => { zip.set(part, position); position += part.length; }); return zip;
  }

  private crc32(data: Uint8Array): number {
    let crc = 0xffffffff; for (const byte of data) { crc ^= byte; for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0); } return (crc ^ 0xffffffff) >>> 0;
  }

  private contentFor(brand: string, headline: string, description: string, buttonText: string): LandingContent {
    return { brand, headline, description, buttonText, navOne: 'Features', navTwo: 'Stories', sectionTitle: 'Everything your best work needs.', sectionDescription: 'A complete toolkit designed to help you move with clarity and confidence.', featureOne: 'One clear workspace', featureTwo: 'Designed for flow', featureThree: 'Move with confidence', testimonial: 'This changed how our team works together every day.' };
  }

}
