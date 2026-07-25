import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

/**
 * safeUrl pipe: use for [src] on <video> and <img> elements (bypassSecurityTrustUrl)
 * safeResourceUrl pipe: use for [src] on <iframe> elements (bypassSecurityTrustResourceUrl)
 */
@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url || '');
  }
}

@Pipe({ name: 'safeResourceUrl' })
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url || '');
  }
}
