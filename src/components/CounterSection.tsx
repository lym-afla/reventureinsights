'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface CounterProps {
  sectorCount: number;
  companyCount: number;
}

const CounterSection = ({ sectorCount = 40, companyCount = 200 }: CounterProps) => {
  const sectorCountRef = useRef<HTMLHeadingElement>(null);
  const startupCountRef = useRef<HTMLSpanElement>(null);
  
  // Function to animate count
  const animateCount = (
    element: HTMLElement,
    start: number,
    end: number,
    duration: number
  ) => {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      current += increment;
      if (element) element.textContent = current.toString();
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };
  
  useEffect(() => {
    // Create an intersection observer to start animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'sectorCount' && sectorCountRef.current) {
              animateCount(sectorCountRef.current, 0, sectorCount, 1000);
            } else if (entry.target.id === 'startupCount' && startupCountRef.current) {
              animateCount(startupCountRef.current, 0, companyCount, 1000);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    // Start observing elements
    if (sectorCountRef.current) observer.observe(sectorCountRef.current);
    if (startupCountRef.current) observer.observe(startupCountRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [sectorCount, companyCount]);
  
  return (
    <div className="f-section-regular">
      <div className="f-container-regular">
        <div className="w-layout-grid f-grid-two-column">
          <div className="f-feature-card-large">
            <div className="f-margin-bottom-130">
              <div className="f-feature-icon-wrapper white-background">
                <Image
                  src="/images/house.png"
                  width={512}
                  height={512}
                  alt="House icon representing real estate"
                />
              </div>
            </div>
            <div className="f-margin-bottom-130">
              <div className="f-margin-bottom-04">
                <h5 id="sectorCount" ref={sectorCountRef} className="f-h1-heading-4">0</h5>
              </div>
              <div className="f-heading-detail-small database-feature">
                Sector count
              </div>
            </div>
          </div>
          <div className="f-feature-card-large">
            <div className="f-margin-bottom-130">
              <div className="f-feature-icon-wrapper white-background">
                <Image
                  src="/images/shuttle.png"
                  width={512}
                  height={512}
                  alt="Image of a shuttle representing high-growing startup"
                />
              </div>
            </div>
            <div className="f-margin-bottom-130">
              <div className="f-margin-bottom-04">
                <h5 className="f-h1-heading-4">
                  &gt;<span id="startupCount" ref={startupCountRef}>0</span>
                </h5>
              </div>
              <div className="f-heading-detail-small database-feature">
                Company count
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection; 