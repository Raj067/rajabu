(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const projects = {
    pamoja: {
      number: '01', category: 'LOGISTICS · TRANSPORT TECHNOLOGY', title: 'PamojaRoute',
      client: 'Product: PamojaRoute · Tender context: MSK Logistics (proposed solution) · Bidder: Apionix Technology',
      about: 'Transport and fleet operations platform. The reviewed product foundation includes shipment requests and status, vehicle and driver assignment, fuel and vehicle expenses, maintenance reminders, quotations and invoices. The MSK proposal identifies trip-linked cost accounting and bus ticketing as planned extensions.',
      role: 'Software engineer / technical lead on the PamojaRoute product, based on the tender team roster.',
      tech: ['Django', 'React', 'TypeScript', 'Redis-backed jobs', 'Web APIs'],
      outcome: 'A working foundation for shipment and fleet workflows, with a phased path toward order-to-profitability and bus schedule-to-revenue reconciliation. The tender distinguishes existing functions from proposed custom work.',
      image: 'Context photo: white freight truck by Nishat Samadzai on Unsplash. It is editorial imagery, not a PamojaRoute screenshot.',
      imageUrl: 'https://unsplash.com/photos/white-semi-truck-on-highway-9rgdubqB9vY',
      link: 'https://pamojaroute.com/'
    },
    iaat: {
      number: '02', category: 'MEMBERSHIP · REGISTRATION', title: 'IAAT Online Registration System',
      client: 'Insurance Agents Association of Tanzania (IAAT)',
      about: 'A digital registry for agency profiles, insured members, documents and annual subscriptions, with an online registration and member access flow.',
      role: 'Software engineering contribution across the IAAT web application. The repository lists Rajabu Mrisho as its author; detailed task allocation is not recorded in the portfolio.',
      tech: ['Python', 'Django', 'Django REST Framework', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostgreSQL'],
      outcome: 'Provides a central online registration and agency registry in place of a paper-first membership journey. No usage or completion figures are published in the supplied material.',
      image: 'Context photo: registration desk by Chidera Faustina Okeke on Unsplash. It is not a screenshot of the IAAT portal.',
      imageUrl: 'https://unsplash.com/photos/people-signing-up-at-an-outdoor-event-desk-6JPMEebAP5A',
      link: 'https://ors.iaat.or.tz/account/login/'
    },
    west: {
      number: '03', category: 'SECURITY · FIELD OPERATIONS', title: 'West Security Operations',
      client: 'West Security / GardaWorld, as named in the tender project register',
      about: 'Security operations software. The repository documents procurement, asset, armory and vehicle records, with linked requisitions organized by department, region or zone and assigned to employees. Patrol tracking is also listed in the tender project register.',
      role: 'Software engineering on the West Security system. The available project notes describe the procurement and requisition workflows.',
      tech: ['Python', 'Django', 'Django REST Framework', 'React', 'Vite', 'Celery', 'Redis', 'Django Channels'],
      outcome: 'Connects procured assets to staff requests and assignment records; the tender also identifies patrol activity traceability as part of the project experience.',
      image: 'Official West Security fleet photo from the company website.',
      imageUrl: 'https://westsecurity.co.tz/',
      link: 'https://app.westsecurity.co.tz/'
    },
    tanzmed: {
      number: '04', category: 'HEALTHCARE · MOBILE', title: 'TanzMED',
      client: 'Africa Health Technologies',
      about: 'A digital healthcare app bringing services such as online consultations, appointments, health information and other care journeys into a mobile experience. The linked public listing may reflect product updates beyond my own delivery period.',
      role: 'Lead Developer. This title and employer were supplied by Rajabu.',
      tech: ['Laravel (backend)', 'Flutter (mobile app)', 'Dart', 'Docker'],
      outcome: 'Led app development for a healthcare technology product. No project-period metrics or feature-level attribution were provided.',
      image: 'TanzMED app artwork from a public product listing; current art may postdate my work on the app.',
      imageUrl: 'https://tanzmed.en.aptoide.com/app',
      link: 'https://tanzmed.africa/'
    },
    sstepapp: {
      number: '05', category: 'EDUCATION · SCHOOL MANAGEMENT', title: 'SStepApp',
      client: 'Rahntech · SStepApp (school customers not named publicly)',
      about: 'An all-in-one school management platform connecting administrators, teachers, parents and students. The current public product site lists fee management and payments, academic reports, attendance, communication, learning materials, exams and quizzes.',
      role: 'Software developer at Rahntech; developed SStepApp.',
      tech: ['Project-specific stack not provided'],
      outcome: 'The product brings academic and administrative workflows together, and the public site describes secure fee payments and real-time updates. Current public features may have evolved since Rajabu’s work on the system.',
      image: 'SStepApp dashboard image from the official website.',
      imageUrl: 'https://sstepapp.co.tz/',
      link: 'https://sstepapp.co.tz/'
    },
    dukani: {
      number: '06', category: 'RETAIL · MOBILE · OFFLINE-FIRST', title: 'DukaApp / Dukani',
      client: 'Product developer: Rajabu Mrisho Mustapha · Google Play lists Apionix Technology as developer',
      about: 'Mobile business management for Tanzanian shops, covering sales, inventory, purchases, customer balances, expenses and business reports. It is designed to keep core workflows usable offline.',
      role: 'Product and software development across the web/backend and mobile applications; supported by the DukaApp and DukaApp-mobile repositories.',
      tech: ['Django', 'Django REST Framework', 'React', 'TypeScript', 'Flutter', 'SQLite / Drift'],
      outcome: 'Published on Google Play, where the public listing showed 100+ downloads when checked. Offline sales and stock workflows are highlighted in the listing.',
      image: 'App screenshot from the public Dukani Google Play listing.',
      imageUrl: 'https://play.google.com/store/apps/details?id=com.dukani.app',
      link: 'https://play.google.com/store/apps/details?id=com.dukani.app'
    },
    hospital: {
      number: '07', category: 'HEALTHCARE · OPERATIONS', title: 'Hospital Management System',
      client: 'Client not named in the original portfolio',
      about: 'An earlier portfolio project described as a hospital management system, intended to organize day-to-day healthcare facility information and operations. Detailed modules were not recorded.',
      role: 'Project contributor; specific responsibilities are not listed in the original portfolio.',
      tech: ['Technology details not provided'],
      outcome: 'Listed as a completed portfolio project; delivery status, modules and outcome metrics need project records to substantiate further detail.',
      image: 'Context photo: clinician and patient by Accuray on Unsplash. It is not a screenshot of the hospital system.',
      imageUrl: 'https://unsplash.com/photos/doctor-and-patient-in-medical-room-ThpS0DVkPBs',
      link: ''
    },
    ats: {
      number: '08', category: 'HIRING · WORKFLOW', title: 'Applicant Tracking System',
      client: 'Client not named in the original portfolio',
      about: 'An applicant tracking project for organizing job applications and review stages. The original portfolio does not include a module or client breakdown.',
      role: 'Project contributor; specific responsibilities are not listed in the original portfolio.',
      tech: ['Technology details not provided'],
      outcome: 'Recruitment workflow project listed in the original portfolio. Deployment and hiring impact figures are not available.',
      image: 'Context photo: job interview by Vitaly Gariev on Unsplash. It is not a screenshot of the applicant tracking system.',
      imageUrl: 'https://unsplash.com/photos/two-people-in-a-business-meeting-with-a-clipboard-HcS7MOSp-94',
      link: ''
    },
    accounting: {
      number: '09', category: 'FINANCE · BUSINESS SYSTEMS', title: 'Accounting System',
      client: 'Client not named in the original portfolio',
      about: 'An earlier portfolio project described as an accounting system for common business financial records. A detailed feature list was not recorded.',
      role: 'Project contributor; specific responsibilities are not listed in the original portfolio.',
      tech: ['Technology details not provided'],
      outcome: 'Accounting software project listed in the original portfolio. Deployment and business outcome figures are not available.',
      image: 'Context photo: calculator and financial planning materials by Cht Gsml on Unsplash. It is not a screenshot of the accounting system.',
      imageUrl: 'https://unsplash.com/photos/desk-with-calculator-notebook-pencil-and-plant-QfQW294I8sQ',
      link: ''
    }
  };

  const dialog = document.querySelector('#project-dialog');
  let lastProjectTrigger;

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || '';
  };

  const openProject = (key, trigger) => {
    const project = projects[key];
    if (!project || !dialog) return;
    lastProjectTrigger = trigger;
    setText('#dialog-category', project.category);
    setText('#dialog-index', `CASE STUDY / ${project.number}`);
    setText('#dialog-title', project.title);
    setText('#dialog-client', project.client);
    setText('#dialog-about', project.about);
    setText('#dialog-role', project.role);
    setText('#dialog-outcome', project.outcome);

    const tech = document.querySelector('#dialog-tech');
    tech.replaceChildren(...project.tech.map((item) => {
      const tag = document.createElement('span');
      tag.textContent = item;
      return tag;
    }));

    const imageSource = document.querySelector('#dialog-image-source');
    imageSource.textContent = project.image;
    imageSource.href = project.imageUrl || '';
    imageSource.hidden = !project.imageUrl;

    const liveLink = document.querySelector('#dialog-live-link');
    if (project.link) {
      liveLink.href = project.link;
      liveLink.hidden = false;
    } else {
      liveLink.removeAttribute('href');
      liveLink.hidden = true;
    }

    dialog.showModal();
  };

  document.querySelectorAll('[data-project-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openProject(trigger.dataset.projectOpen, trigger));
  });

  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (lastProjectTrigger) lastProjectTrigger.focus();
    });
  }
})();
