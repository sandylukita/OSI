/**
 * PT Optima Sarana Instrumen (PT OSI)
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation & Scroll Progress
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 3. Product Catalog Filter
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 4. Modal Handler for Products & Legality Certificates
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContentContainer = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalClose');

  const openModal = (htmlContent) => {
    if (modalOverlay && modalContentContainer) {
      modalContentContainer.innerHTML = htmlContent;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Detail Data Store for Products
  const productDetails = {
    'securebridge': {
      title: '🔐 SecureBridge - AI-Powered OT/ICS Security Platform',
      badge: 'OT/ICS Cyber Security (v1.0.0)',
      img: 'asset/foto_banner/Comercial.jpg',
      content: `
        <div style="background:rgba(0, 242, 254, 0.05); border:1px solid var(--border-glow); padding:1rem 1.25rem; border-radius:var(--radius-sm); margin-bottom:1.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <span><strong style="color:#fff;">Platform:</strong> PT Optima Sarana Instrumen</span>
            <span class="badge" style="background:rgba(16,185,129,0.15); color:var(--accent-emerald); border-color:rgba(16,185,129,0.3);"><i class="fa-solid fa-circle" style="font-size:0.5rem;"></i> Active Development — Live Deployment v1.0.0</span>
          </div>
        </div>

        <h3>What is SecureBridge?</h3>
        <p>SecureBridge is an agentless OT/ICS security monitoring platform designed for industrial instrumentation companies and their clients in the oil & gas sector. It bridges the gap between enterprise OT security tools (Dragos, Claroty — $100k+/year) and companies that need industrial security without enterprise budgets.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">Architecture Flow:</h4>
        <div style="background:#0a0d14; border:1px solid var(--border-color); padding:1.2rem; border-radius:var(--radius-sm); margin:0.8rem 0 1.5rem; font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-cyan); overflow-x:auto;">
          [OT Devices] → [Passive Capture] → [Protocol Analysis] → [ML Anomaly Detection] → [LLM Threat Analysis (Claude API)] → [Live SOC Dashboard & IEC 62443 Reports (ID/EN)]
        </div>

        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">7 Core Features:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-shield-halved"></i> <strong>1. Agentless OT Network Monitor:</strong> Passive packet capture with zero impact on OT operations. No agent installation required on legacy OT devices.</li>
          <li><i class="fa-solid fa-network-wired"></i> <strong>2. Protocol-Aware Analysis:</strong> Deep packet inspection for industrial protocols: Modbus TCP (register read/write), DNP3 (SCADA), OPC-UA (IT/OT bridge), S7comm (Siemens PLC detection).</li>
          <li><i class="fa-solid fa-brain"></i> <strong>3. AI Anomaly Detection:</strong> Isolation Forest ML model trained on device-specific baselines to detect behavioral deviations invisible to signature tools.</li>
          <li><i class="fa-solid fa-robot"></i> <strong>4. LLM Threat Advisor (Claude API):</strong> Intelligent threat analysis providing plain-English explanations, ranked root cause analysis, IEC 62443 response actions, and severity classification.</li>
          <li><i class="fa-solid fa-chart-line"></i> <strong>5. Real-Time Dashboard:</strong> Streamlit-based SOC view showing live device status/health, anomaly timeline scoring, AI alert analysis, and network topology.</li>
          <li><i class="fa-solid fa-file-pdf"></i> <strong>6. Compliance Report Generator:</strong> Automated PDF reports in English and Bahasa Indonesia with IEC 62443 compliance scoring, remediation roadmaps, and audit-ready executive summaries.</li>
          <li><i class="fa-solid fa-bell"></i> <strong>7. Multi-Channel Alerting:</strong> Instant notification dispatch via Email (SMTP), Telegram Bot, and Dashboard alerts.</li>
        </ul>
      `
    },
    'ai-analytics': {
      title: 'AI POWERED ANALYTICS & PREDICTIVE SOFTWARE (LYRA / MoonStone)',
      badge: 'Industrial IoT & AI',
      img: 'asset/foto_link/anal.jpg',
      content: `
        <h3>Fast Track to Technical Knowledge on Critical Industrial Assets</h3>
        <p>Reliable AI-Analytics seamlessly integrating client data with non-invasive sensor networks for manufacturing, energy, and logistics.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">Key Architecture & Hardware:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-check"></i> <strong>LYRASens:</strong> Wireless vibration and temperature sensing network.</li>
          <li><i class="fa-solid fa-check"></i> <strong>LYRALink:</strong> IO-Link & analogue interface for electric current, temp, and shaft vibration.</li>
          <li><i class="fa-solid fa-check"></i> <strong>LYRAGate:</strong> Gateway with Modbus interface for data transfer to MoonStone Blue.</li>
          <li><i class="fa-solid fa-check"></i> <strong>Sub-GHz Wireless Radio:</strong> Ultra long-range bi-directional communication in harsh industrial environments with TDMA/FHSS MAC time sync (< 0.1ms).</li>
        </ul>

        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">MoonStone Insight Features:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-chart-line"></i> Smart Monitoring Cloud Platform calculating predefined KPIs using classic or AI-based algorithms.</li>
          <li><i class="fa-solid fa-cogs"></i> Standard KPI libraries for rotating machinery (compressor, ventilator) and linear machines (cranes, robots).</li>
          <li><i class="fa-solid fa-file-pdf"></i> Automated periodic pdf reporting & RESTful API streaming.</li>
          <li><i class="fa-solid fa-cube"></i> Self-contained Linux Docker setup allowing Jupyter Notebook analytics on schedule.</li>
        </ul>
      `
    },
    'instrumentation': {
      title: 'Instrumentation & Process Control Systems',
      badge: 'Measurement & Automation',
      img: 'asset/foto_link/measurement.jpg',
      content: `
        <h3>Comprehensive Field Measurement & System Integration</h3>
        <p>PT OSI delivers one-stop solutions for field measurement, process control, and plant automation across Indonesia's core industrial sectors.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">System Scope & Capabilities:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-gauge-high"></i> <strong>Pressure & Temperature:</strong> High-precision transmitters, gauges, and multi-point RTDs/thermocouples.</li>
          <li><i class="fa-solid fa-water"></i> <strong>Level & Flow:</strong> Electromagnetic, ultrasonic, radar, and flow computer solutions.</li>
          <li><i class="fa-solid fa-sliders"></i> <strong>Final Control:</strong> Control valves, actuators, positioners, and safety shutdown systems.</li>
          <li><i class="fa-solid fa-microchip"></i> <strong>PLC, HMI & SCADA:</strong> Custom control logic, graphical operator panels, and centralized SCADA networks.</li>
          <li><i class="fa-solid fa-flask"></i> <strong>Sampling Systems:</strong> Automated sample conditioning units for gas and liquid analyzers.</li>
        </ul>
      `
    },
    'voltage-proxxi': {
      title: 'VOLTAGE by PROXXI',
      badge: 'Electrical Wearable Safety',
      img: 'asset/foto_link/proxxi.jpg',
      content: `
        <h3>Active Wearable Hazard Monitoring for High-Voltage Personnel</h3>
        <p>Workers are exposed to electrical hazards on a daily basis. Voltage by Proxxi provides an unyielding, continuous safety monitoring layer around technicians and engineers.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">Key Features:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-shield-halved"></i> <strong>360° Field Detection:</strong> Sensors warn workers as they approach energized equipment before contact occurs.</li>
          <li><i class="fa-solid fa-bell"></i> <strong>Haptic & Audio Alerts:</strong> Immediate high-decibel vibration and tone notification.</li>
          <li><i class="fa-solid fa-layer-group"></i> <strong>Non-Intrusive Layer:</strong> Complements existing PPE requirements without adding weight or restricting movement.</li>
          <li><i class="fa-solid fa-chart-pie"></i> <strong>Incident Analytics:</strong> Mobile app data syncing for safety officer reporting and hazard mapping.</li>
        </ul>
      `
    },
    'gracehsm': {
      title: 'GraceSense™ Hot Spot Monitor (HSM)',
      badge: 'Continuous Thermal Monitoring',
      img: 'asset/foto_statis/gracehsm.jpg',
      content: `
        <h3>Predictive Electrical Asset Failure Prevention</h3>
        <p>GraceSense™ Hot Spot Monitor (HSM) is a non-conductive temperature monitoring and alarming device that identifies potential hot spots before catastrophic electrical failures occur.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">Technical Advantages:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-bolt"></i> <strong>Non-Conductive Fiber Probes:</strong> Securely piggy-back onto bolted busbar connections, transformer terminals, and switchgear.</li>
          <li><i class="fa-solid fa-network-wired"></i> <strong>Protocol Support:</strong> Connects via MODBUS TCP/IP, Ethernet I/P, and standalone GraceSense™ Web Utility Interface.</li>
          <li><i class="fa-solid fa-bell-concierge"></i> <strong>Configurable Thresholds:</strong> Set custom multi-stage temperature alarms and relay outputs for shutdown circuits.</li>
          <li><i class="fa-solid fa-user-shield"></i> <strong>Arc Flash Safety:</strong> Safely monitor inaccessible energized connections without opening switchgear cabinet doors.</li>
        </ul>
      `
    },
    'genie-filter': {
      title: 'Genie® Membrane & Liquid/Gas Separators',
      badge: 'Analytical Sample Conditioning',
      img: 'asset/foto_statis/genie.jpg',
      content: `
        <h3>Industry Standard Sample Conditioning for Process Analyzers</h3>
        <p>Genie® Membrane Filters protect gas analyzers from liquid entrainment and particulate contamination, ensuring maximum uptime and measurement reliability.</p>
        
        <h4 style="margin-top:1.5rem; color:var(--accent-cyan);">Core Capabilities:</h4>
        <ul class="service-list" style="margin-top:0.8rem;">
          <li><i class="fa-solid fa-filter"></i> <strong>Phase Separation:</strong> Complete liquid/gas and liquid/liquid phase separation membranes.</li>
          <li><i class="fa-solid fa-industry"></i> <strong>High Pressure & Temp Ratings:</strong> Designed for harsh petrochemical, refinery, and natural gas sampling lines.</li>
          <li><i class="fa-solid fa-vial"></i> <strong>Zero Contamination Carryover:</strong> Inert materials prevent absorption/desorption effects on volatile gas components.</li>
        </ul>
      `
    }
  };

  // Attach Detail Buttons
  document.querySelectorAll('[data-product-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.productKey;
      const data = productDetails[key];
      if (data) {
        const html = `
          <span class="badge" style="margin-bottom:1rem;">${data.badge}</span>
          <h2 style="margin-bottom:1.5rem;">${data.title}</h2>
          <img src="${data.img}" alt="${data.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem; border:1px solid var(--border-color);" onError="this.src='asset/foto_link/measurement.jpg'">
          <div>${data.content}</div>
          <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-color); display:flex; gap:1rem;">
            <a href="#contact" class="btn btn-primary" onclick="closeModalDirect();"><i class="fa-solid fa-envelope"></i> Request Technical Consultation</a>
          </div>
        `;
        openModal(html);
      }
    });
  });

  window.closeModalDirect = () => closeModal();

  // 5. Certificate Lightbox
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.dataset.img;
      const title = card.querySelector('h4') ? card.querySelector('h4').innerText : 'Legal Certificate';
      if (imgSrc) {
        const html = `
          <h3 style="margin-bottom:1.5rem; text-align:center;">${title}</h3>
          <div style="text-align:center; background:#000; padding:1rem; border-radius:var(--radius-md);">
            <img src="${imgSrc}" alt="${title}" style="max-width:100%; max-height:70vh; object-fit:contain;" onError="alert('Document image available upon request.');">
          </div>
        `;
        openModal(html);
      }
    });
  });

  // 6. Number Counter Animation for Stats
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let animated = false;

  const animateStats = () => {
    const statsSection = document.querySelector('.stats-bar');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !animated) {
      animated = true;
      statNumbers.forEach(counter => {
        const target = +counter.dataset.target;
        const speed = 1500 / target;
        let count = 0;

        const updateCount = () => {
          const inc = Math.ceil(target / 40);
          count += inc;
          if (count < target) {
            counter.innerText = count;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target + (counter.dataset.suffix || '');
          }
        };
        updateCount();
      });
    }
  };

  window.addEventListener('scroll', animateStats);
  animateStats();

  // 7. Contact Form Interactive Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Inquiry...`;
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Inquiry Submitted Successfully!`;
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        btn.style.color = '#fff';

        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 4000);
      }, 1200);
    });
  }
});
