import { Component, OnInit } from '@angular/core';

export interface FeatureModalData { title: string; desc: string; }
export interface CheckoutModalData { plan: string; price: string; }

@Component({
  selector: 'app-website-preview',
  templateUrl: './website-preview.component.html',
  styleUrls: ['./website-preview.component.css']
})
export class WebsitePreviewComponent implements OnInit {
  style = 'cinema';
  type = 'ott';
  content: any = {};

  activeModal: 'signin' | 'register' | 'feature' | 'checkout' | 'video' | null = null;
  activeFeature: FeatureModalData | null = null;
  activeCheckout: CheckoutModalData | null = null;
  activeVideo: { title: string; url: string } | null = null;

  authEmail = '';
  authPassword = '';
  authName = '';
  authSuccessMessage = '';
  billingCycle = 'Monthly';

  ngOnInit(): void {
    const saved = localStorage.getItem('portfolio-theme-preview');
    if (saved) {
      try {
        const p = JSON.parse(saved);
        this.style = p.style || 'cinema';
        this.type = p.type || 'ott';
        this.content = p.content || {};
      } catch { }
    }
  }

  openAuthModal(type: 'signin' | 'register' = 'signin'): void {
    this.activeModal = type;
    this.authSuccessMessage = '';
  }

  openFeatureModal(title: string, desc: string): void {
    this.activeFeature = { title, desc };
    this.activeModal = 'feature';
  }

  openCheckoutModal(plan: string, price: string): void {
    this.activeCheckout = { plan, price };
    this.activeModal = 'checkout';
    this.authSuccessMessage = '';
  }

  openVideoModal(title?: string, url?: string): void {
    this.activeVideo = {
      title: title || 'Video Trailer',
      url: url || this.content.mediaUrl || ''
    };
    this.activeModal = 'video';
  }

  closeModal(): void {
    this.activeModal = null;
    this.activeFeature = null;
    this.activeCheckout = null;
    this.activeVideo = null;
  }

  handleAuthSubmit(): void {
    if (this.activeModal === 'signin') {
      this.authSuccessMessage = `Welcome back! Signed in as ${this.authEmail || 'user@example.com'}`;
    } else {
      this.authSuccessMessage = `Account created successfully for ${this.authName || 'User'}!`;
    }
    setTimeout(() => { this.closeModal(); }, 1500);
  }

  handleCheckoutSubmit(): void {
    this.authSuccessMessage = `Subscription activated for ${this.activeCheckout?.plan || 'Plan'} (${this.billingCycle})!`;
    setTimeout(() => { this.closeModal(); }, 1500);
  }

  getYoutubeEmbedUrl(url?: string): string {
    if (!url) return '';
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    const id = (watchMatch || shortMatch)?.[1];
    if (id) {
      return `https://www.youtube.com/embed/${id}?controls=1&rel=0&autoplay=1`;
    }
    return '';
  }

  isYoutubeUrl(url?: string): boolean { return !!this.getYoutubeEmbedUrl(url); }
}
