import React, { Component } from 'react'

export default class WhyChooseUs extends Component {
    
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("wcu_tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }


    render() {
        return (
            <div className="choose-us-six-area ptb-100 overflow-hidden">
                <div className="container"> 
                    <div className="choose-us-six-content">
                        <div className="tab">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab1')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            NETWORKING
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab2')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            MANAGED SERVICES
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab3')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            COMPLIANCE & AUDIT
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab4')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            IT CONSULTING
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab5')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            HR CONSULTING
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab6')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            VA and Pen. Testing
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab7')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            GRC
                                        </li>
                                        <li
                                            onClick={(e) => this.openTabSection(e, 'wcu_tab8')}
                                        >
                                            <i className="bx bx-chevron-right"></i>
                                            Open source Consulting
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-9">
                                    <div className="tab_content">
                                        <div id="wcu_tab1" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>NETWORKING</h3>
                                                            <p>In any market scenario to be able to maintain PC’s, Servers and Network installations in an effective and user-friendly manner, network and structured cabling set up is mandatory. We at ASHAL TECH, are committed towards providing round the clock service and support for your critical business needs. We believe that in customized response for each of your needs. We provide comprehensive and non-comprehensive annual maintenance contracts, covering the maintenance of your IT hardware, years after your warranty period is over.</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR NETWORKING SERVICES INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> Structure Cabling</li>
                                                                <li><i className="bx bx-check"></i> Server Room Setup</li>
                                                                <li><i className="bx bx-check"></i> Network & Server Migration</li>
                                                                <li><i className="bx bx-check"></i> Network Security</li>
                                                                <li><i className="bx bx-check"></i> Network Planning & Design</li>
                                                                <li><i className="bx bx-check"></i> Network Installation & Troubleshooting</li>
                                                                <li><i className="bx bx-check"></i> Telephone Systems Implementation</li>
                                                                <li><i className="bx bx-check"></i> Office Migration</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab2" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>MANAGED SERVICES</h3>
                                                            <p>Whether your business requires systems management and network consulting services. We are committed to excellence in customer service and support, so you can depend on our team for all your technology issues. When you have a dependable partner in computer network maintenance, you can get back to running your business.</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR MANAGED SERVICES INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> VPN Network Monitoring</li>
                                                                <li><i className="bx bx-check"></i> Server Management</li>
                                                                <li><i className="bx bx-check"></i> Managed Security</li>
                                                                <li><i className="bx bx-check"></i> Managed Storage</li>
                                                                <li><i className="bx bx-check"></i> Wireless Equipment Management</li>
                                                                <li><i className="bx bx-check"></i> Application Maintenance</li>
                                                                <li><i className="bx bx-check"></i> Software Licensing</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab3" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h6>COMPLIANCE AND AUDIT</h6>
                                                            <h3>We help you to be compliant</h3>
                                                            <p>Ashal Tech Information Security Solutions gets you with, the process of meeting compliance regulations such as ISO and PCI DSS.</p>
                                                            <h4>ISO 27001:2013</h4>
                                                            <p>We provide ISO 27001:2013 consulting and implementation support. This includes a phase wise approach that involves understanding business context to information security, information asset identification, information valuation, security valuation, technical and procedural risk assessment, gap analysis against ISO 27001 114 controls, detail recommendations, policy/documentation support, training, coaching employees/teams, coaching security managers, security performance setting, gap implementation monitoring, audit and management review leading to successful zero defect ISO 27001 – 2013 certification. Our ISO 27001 consulting methodology ensures several benefits. This includes identification of all vulnerabilities in the Infrastructure be it related to technology, skill, vendor or locations. Top Management can clearly see the overall risk reduction in the organization and the way it is embedded in each business life cycle.</p>
                                                            <h3>WHAT IS ISO 27001: 2013?</h3>
                                                            <h4>Coverage</h4>
                                                            <p>The standard is divided into management system controls and annexure controls – also known as detail controls.</p>
                                                            <h4>Management System Controls (Clause 4 to 10)</h4>
                                                            <ul>
                                                                <li><i className="bx bx-bullseye"></i> Clause 1 – Scope</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 2 – Normative references</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 3 – Terms and definitions</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 4 – Context of the organisation</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 5 – Leadership</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 6 – Planning</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 7 – Support</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 8 – Operation</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 9 – Performance Evaluation</li>
                                                                <li><i className="bx bx-bullseye"></i> Clause 10 – Improvement</li>
                                                            </ul>
                                                            <h4>Annexure Controls (14 domains 35 control objectives and 114 detail controls)</h4>
                                                            <ul>
                                                                <li><i className="bx bx-bullseye"></i> A.5 Security policies</li>
                                                                <li><i className="bx bx-bullseye"></i> A.6 Organization of information security</li>
                                                                <li><i className="bx bx-bullseye"></i> A.7 Human resource security</li>
                                                                <li><i className="bx bx-bullseye"></i> A.8 Asset Management</li>
                                                                <li><i className="bx bx-bullseye"></i> A.9 Access control</li>
                                                                <li><i className="bx bx-bullseye"></i> A.10 Cryptography</li>
                                                                <li><i className="bx bx-bullseye"></i> A.11 Physical and environmental security</li>
                                                                <li><i className="bx bx-bullseye"></i> A.12 Operations Security</li>
                                                                <li><i className="bx bx-bullseye"></i> A.14 System acquisition, development and maintenance</li>
                                                                <li><i className="bx bx-bullseye"></i> A.15 Supplier relationships</li>
                                                                <li><i className="bx bx-bullseye"></i> A.16 Information security incident management</li>
                                                                <li><i className="bx bx-bullseye"></i> A.17 Information security aspects of business continuity management</li>
                                                                <li><i className="bx bx-bullseye"></i> A.18 Compliance</li>
                                                            </ul>
                                                            <h3>WHAT IS INFORMATION SECURITY MANAGEMENT SYSTEM (ISMS)?</h3>
                                                            <p>A step-by-step method of identifying information that is key to business success. ISMS also include a comprehensive approach in assessing risks on one hand, and identifying opportunities for improvement. Such opportunities take the shape of designing, documenting, implementing, measuring , auditing and continuously improving information security posture. Improvement can take place both due to proactive process such as risk assessment, and reactive such as Incidents. In simple words, a proactive approach to preventing and reacting to information related incidents. The ability to be aware of what is our present weakness and our ability to know how we will react– is in essence a true impact of a formal ISMS. On the contrary not being aware of any aspect of the any part of the system and its security relevance, or the approach that we will take in case of a failure – therefore demonstrates the absence of ISMS.</p>
                                                            <h3>WHAT IS ASHAL TECH APPROACH TO SUCCESSFUL ISMS – ISO 27001 CONSULTING/CERTIFICATION?</h3>
                                                            <p>We bring our world-class experience in delivery ISMS ISO 27001 implementation leading to successful certification.</p>
                                                            <p><strong>Phase I</strong> – Understanding the business context and relevance of information security is the starting point of ISO 27001 2013 implementation analysis.</p>
                                                            <p><strong>Phase II</strong> – Detail risk assessment/Gap analysis including information asset identification, it security risk assessment including threats, impacts, vulnerabilities and probabilities resulting in identification of risks, and gaps. In addition we compare which of the ISO 27001 114 controls are applicable and relevant in implementing it risk management.</p>
                                                            <p><strong>Phase III</strong> – Implementation/measurement journey through definition of ISO 27001 policy/procedure/documentation on one hand and the implementation of risk based gaps on the other. This phase takes the maximum time.</p>
                                                            <p><strong>Phase IV</strong> – Internal Audit also referred as iso 27001 audit is the process of verifying successful ISO 27001 implementation, on one hand, and the inclusion of security principle in business lifecycle on the other.</p>
                                                            <p><strong>Phase V</strong> – ISO 27001 Registration body certification This has is two stages:</p>
                                                            <p>STAGE 1 – DOCUMENTATION, AND, STAGE 2 – IMPLEMENTATION VERIFICATION.</p>
                                                            <h4>Overview</h4>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h3>WHAT ARE THE KEY CONSULTING DIFFERENTIATORS TO OUR ISO 27001 CONSULTING ASSIGNMENT?</h3>
                                                                    <ul>
                                                                        <li><i className="bx bx-bullseye"></i> Security Architecture in line with business protection objectives</li>
                                                                        <li><i className="bx bx-bullseye"></i> Enterprise/information risk reduction</li>
                                                                        <li><i className="bx bx-bullseye"></i> ROI consulting</li>
                                                                        <li><i className="bx bx-bullseye"></i> Speed and comprehensiveness in consulting delivery</li>
                                                                        <li><i className="bx bx-bullseye"></i> Security principles embedded in each business lifecycle/change</li>
                                                                        <li><i className="bx bx-bullseye"></i> Structured and proven risk assessment and risk measurement</li>
                                                                        <li><i className="bx bx-bullseye"></i> Documentation at 4 layers which encompass certification and internal maturity requirements</li>
                                                                        <li><i className="bx bx-bullseye"></i> Measurements that determine the degree of compliance for 114 controls</li>
                                                                        <li><i className="bx bx-bullseye"></i> Higher participation of compliance through head of department involvement</li>
                                                                        <li><i className="bx bx-bullseye"></i> Awareness to each and every member of the organisation</li>
                                                                        <li><i className="bx bx-bullseye"></i> Framework implementation and continual improvement</li>
                                                                        <li><i className="bx bx-bullseye"></i> Successful ISO 27001 certification</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <h3>UPON ISO 27001 CERTIFICATION WHAT SHOULD HAPPEN IN THE ORGANISATION?</h3>
                                                                    <p>An organisation getting ISO 27001 certification has the following key strengths:</p>
                                                                    <p>An information security policy signed by the top management typically CEO.</p>
                                                                    <p>A formal asset identification process resulting in each asset being identified.</p>
                                                                    <p>Each information asset/system has a formal security classification, which helps in determining their security control.</p>
                                                                    <p>Each control area – technical, procedural, physical, legal – has a policy, responsibility, and wherever possible technology to protect.</p>
                                                                    <p>Trained manpower to carry out there security function</p>
                                                                    <p>A dashboard that goes from security management team to top management explaining how security is performing</p>
                                                                    <p>An annual isms plan that shows the isms activities that involves design, implementation and audits.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab4" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>IT CONSULTING</h3>
                                                            <p>We are experts in both business and technology, providing only the most cost-effective computer IT support. Discover what an IT Consultant can do for your bottom line.</p>
                                                            <p>ASHAL TECH has years of experience successfully implementing advanced technology projects for thousands of clients in both <b>data and voice networking proficiencies.</b> We know what it takes to successfully engineer and deploy a solution that will allow you stay highly competitive in your market place.</p>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <div className="col-lg-6">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>OUR IT CONSULTING SERVICES INCLUDE:</h3>
                                                            <ul>
                                                                <li><i className="bx bx-check"></i> Compliance & IT Audit</li>
                                                                <li><i className="bx bx-check"></i> Vulnerability Assessment</li>
                                                                <li><i className="bx bx-check"></i> Governance, Risk & Compliance</li>
                                                                <li><i className="bx bx-check"></i> Information Security Consultancy</li>
                                                                <li><i className="bx bx-check"></i> Quality Compliance Consulting</li>
                                                                <li><i className="bx bx-check"></i> Business Continuity Strategy</li>
                                                                <li><i className="bx bx-check"></i> Open Source Consulting</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div id="wcu_tab5" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>JOB DESCRIPTION & TALENT MANAGEMENT SOLUTION</h3>
                                                            <p>Handle daily HR tasks more efficiently & accurately, set & accomplish long-term strategic goals, or raise employee performance, engagement & retention, as ASHAL TECH’S guides and supports you every step of the way in job description creation.</p>
                                                            <p>Our consulting services augment with your HR team in creating eye catchy job descriptions that helps you gain maximum appeal for candidates to apply for a job.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="wcu_tab6" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="">
                                                        <div className="choose-us">
                                                            <h3>Vulnerability Assessment and Penetration</h3>
                                                            <p><b>Testing</b> Vulnerability Assessment and Penetration Testing are two important processes, which involve scanning of the network, detecting its risks or vulnerabilities and thereby mitigating the same through various systematic procedures. Vulnerability assessment analyses the security weaknesses in overall network and suggests the level up to which a network can be attacked by a malicious intruder. Accordingly a detailed report is generated and mitigation strategies are planned. <b>Overview</b> Vulnerability Assessment enables clients to quickly identify, assess and remedy security holes. Devices attached to the network are evaluated to detect technical vulnerabilities. Ethical Hacking is accomplished by performing scheduled and selective probes of the network’s communication services, operating systems, key applications, and network equipment in search of those vulnerabilities. Our specialists analyze the vulnerability conditions and provide a detailed report including corrective actions. A Vulnerability Assessment is a method of evaluating the security posture of a system through the identification of vulnerabilities that have the potential for negative impact. Vulnerabilities are then documented and given risk ratings based on an industry-standard risk rating system. This service does not involve exploitation of the identified vulnerabilities, as is present with Penetration Testing. The overall goal of a Vulnerability Assessment is to identify vulnerabilities, document them, apply risk ratings and formally document the results in a report combined with appropriate recommendations for remediation. Vulnerability Assessment is a battle simulation to determine what vulnerabilities have not been addressed in your network. By locating vulnerabilities before the bad guys do, Penetration Testing will increase the level of confidence of the company’s security measures. In particular, Penetration Testing:</p>
                                                            <ul>
                                                                <li><i className="bx bx-bullseye"></i> Provides a “battle-test” for your network, systems, and applications</li>
                                                                <li><i className="bx bx-bullseye"></i> Provides a more “realistic” test than a paper-based assessment</li>
                                                                <li><i className="bx bx-bullseye"></i> Provides a proactive approach to mitigating risk</li>
                                                                <li><i className="bx bx-bullseye"></i> Enhances the quality assurance process</li>
                                                                <li><i className="bx bx-bullseye"></i> Demonstrates the need for and effectiveness of security</li>
                                                            </ul>
                                                            <p>Security Team developed with an aim to ensure security of your business against cyber intrusion and attacks. We offer strategies, capabilities, and technologies necessary to help businesses preemptively protect Web applications & IT infrastructure from threats. We address the complexities and growing costs of security risk management and security compliance.</p>
                                                            <h4>Methodology</h4>
                                                            <ul>
                                                                <li><i className="bx bx-bullseye"></i> <b>Information gathering:</b> Public websites, ARIN, job boards, domain lookup tools, etc</li>
                                                                <li><i className="bx bx-bullseye"></i> <b>Active scanning:</b> Networking/application mapping tools and manual processes</li>
                                                                <li><i className="bx bx-bullseye"></i> <b>Enumeration:</b> Live devices, get vulnerable services and misconfigurations</li>
                                                                <li><i className="bx bx-bullseye"></i> <b>Documentation:</b> Vulnerabilities and best-practice steps for remediation</li>
                                                                <li><i className="bx bx-bullseye"></i> <b>Report:</b> Findings, Evidence, Recommendations, Tools and Methodology</li>
                                                            </ul>
                                                            <h3>Network Penetration Testing</h3>
                                                            <p>A Network Penetration Testing is a method of evaluating the security posture of a network system by simulating an attack from malicious outsiders who would not otherwise have authorized access to the network. Vulnerabilities are then documented and exploited in an effort to determine whether unauthorized access of malicious activity is actually possible. The overall goal of a Network Penetration Test is to identify vulnerabilities, document them, validate them through exploitation, apply risk ratings and formally document the results in a report combined with appropriate recommendations for remediation. Our comprehensive methodology ensures that our clients’ vulnerabilities are represented by their true real-world likelihood and potential impact to their business. The methodology is founded upon industry-standard frameworks, such as: OSSTMM, ISSAF, OWASP, WASC and NIST Special Publication 800 Series guidelines.</p>
                                                            <h4>Methodology</h4>
                                                            <p>System/service discovery consists of compiling a complete list of all accessible systems and their respective services with the ultimate goal of obtaining as much information about the assets as possible. Commonly, this includes: domain foot printing, live host detection, service enumeration, rogue system/service detection, product-specific vulnerability detection, and operating system and application fingerprinting. With the information collected from the discovery phase, security testing transitions to identifying vulnerabilities in internal and externally facing systems and applications using automated scans and manual testing techniques. Ashaltech begins the vulnerability identification process with a combination of commercial and open source vulnerability scanners. Automated scans are good at identifying known and common vulnerabilities, however, automated scans are not good at detecting complex security issues or validating the findings reported. For this reason, automated scans represent only a small facet of the overall security assessment with the majority of vulnerability testing focused on manual testing and verification. Ashaltech has adopted an industry-standard approach to assigning risk ratings to vulnerabilities. This approach is used in all our assessments and provides our clients with consistent risk ratings that take into account a number of factors ranging from: Skill Level, Motive, Ease of Exploit, Loss of Integrity, Loss of Availability to Loss in Privacy and Reputational Damage.</p>
                                                            <h4>Phase 1 – Passive Data Collection</h4>
                                                            <p>The initial phase of any security review involves extensive data collection and penetration studies are no exception. The following methods may be used as part of this information-gathering phase:</p>
                                                            <ul className="border-bottom mb-2 pb-2">
                                                                <li><i className="bx bx-bullseye"></i> Web searches and newsgroup browsing</li>
                                                                <li><i className="bx bx-bullseye"></i> DNS zone transfers, internic queries</li>
                                                                <li><i className="bx bx-bullseye"></i> IP scanning and SNMP sweeps</li>
                                                                <li><i className="bx bx-bullseye"></i> Network mapping with traceroute and other tools</li>
                                                                <li><i className="bx bx-bullseye"></i> Social Engineering (if allowed)</li>
                                                                <li><i className="bx bx-bullseye"></i> Initial target identification</li>
                                                            </ul>
                                                            <h4>Phase 2 – Active Intrusion</h4>
                                                            <p>Once the active intrusion phase is begun, targets are more likely to be alerted to suspicious activity. This phase serves to identify potential or known vulnerabilities that could be exploited by intruders. This is the main analysis phase that correlates the information gathered in the first two stages. Methods of performing this phase can include:</p>
                                                            <ul className="border-bottom mb-2 pb-2">
                                                                <li><i className="bx bx-bullseye"></i> Vulnerability scanning</li>
                                                                <li><i className="bx bx-bullseye"></i> Port scanning</li>
                                                            </ul>
                                                            <h4>Phase 3 – Aggressive Penetration</h4>
                                                            <p>The aggressive phase is typically only used when a client needs to demonstrate actual data or system compromises. This phase involves actually utilizing identified vulnerabilities to gain access to internal systems and networks. This phase typically utilizes many tools that may be available in the public domain and are used by actual intruders. This methods used during this phase are tightly controlled by the penetration agreement and activities are extensively logged.</p>
                                                            <h4>Application Penetration Testing</h4>
                                                            <p className="border-bottom mb-2 pb-2">An Application Penetration Test is a method of evaluating the security posture of an application by simulating an attack from malicious outsiders who would not otherwise have authorized access. Identified vulnerabilities such as Cross-Site Scripting (XSS), SQL Injection and Cross-Site Request Forgery (CSRF) are documented and exploited in an effort to determine whether unauthorized access of malicious activity is actually possible. The overall goal of an Application Penetration Test is to identify vulnerabilities in applications, document them, validate them through exploitation, apply risk ratings and formally document the results in a report combined with appropriate recommendations for remediation. Ashaltech uses the industry standard methodology for testing, reporting and remediating laid out by the Open Web Application Security Project (OWASP) Top 10 Risks.</p>
                                                            <h4>Phase 1 – Passive Website Mapping</h4>
                                                            <p className="border-bottom mb-2 pb-2">The Web Application Ethical Hack begins with Passive Website Mapping that can be designed to evade detection. During this phase the application’s security controls are tested to determine if an attack may result in inappropriately viewing, altering, copying or deleting information. During passive website mapping, testing is performed mimicking two types of users: Unauthorized User attempting to gain access Authorized User trying to acquire and utilize enhanced or inappropriate privileges</p>
                                                            <h4>Phase 2 – Active Penetration</h4>
                                                            <p>The assessment then moves into Active Penetration where the majority of website manipulation takes place. Through an automated and manual process, websites are reviewed for many security risks. The risk review begins by first performing system identification. Once determined the operating system, web server versions and other associated systems have been determined, we are able to quickly evaluate well-known system vulnerabilities. Our process examines for security risk such as:</p>
                                                            <ul className="border-bottom mb-2 pb-2">
                                                                <li><i className="bx bx-bullseye"></i> Encryption / SSL Testing</li>
                                                                <li><i className="bx bx-bullseye"></i> HTML Code & Form Vulnerabilities</li>
                                                                <li><i className="bx bx-bullseye"></i> Hidden Field Manipulation</li>
                                                                <li><i className="bx bx-bullseye"></i> Parameter Tampering</li>
                                                                <li><i className="bx bx-bullseye"></i> Cookie Poisoning</li>
                                                                <li><i className="bx bx-bullseye"></i> Executable code testing such as buffer overflows and IIS weaknesses</li>
                                                            </ul>
                                                            <h4>Phase 3 – Aggressive Penetration</h4>
                                                            <p>Finally, the assessment escalates to Aggressive Penetration where attempts are made to fully compromise the web infrastructures. Within the realm of aggressive penetrations, we perform services based on the type of website:</p>
                                                            <ul>
                                                                <li><i className="bx bx-bullseye"></i> The basic service attempts to exploit the implemented security controls or lack of controls</li>
                                                                <li><i className="bx bx-bullseye"></i> For web financial applications, attempts are made to gain inappropriate access and transfer financial data between test accounts and/or perform other transactions without providing appropriate target authentication</li>
                                                                <li><i className="bx bx-bullseye"></i> For web application that use downloadable code, attempts are made to identify vulnerabilities associated with the installation and operation of the executable</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="wcu_tab7" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <h3>Governance Risk and Compliance</h3>
                                                    <p>Governance, Risk, and Compliance (GRC) services help clients develop a wide-ranging vision and approach for their organizations’ multiple governance, risk, and compliance processes. The key focus is to help improve the sustainability, effectiveness, efficiency, and transparency for GRC processes; align the processes with the organization’s strategic goals and objectives; and drive both competitive advantage and shareholder value.</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="image">
                                                        <img src="/img/services/grc1.gif" alt="Image" />
                                                    </div> 
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="choose-us">
                                                        <h4>Overview</h4>
                                                        <span className="text-secondary">GOVERNANCE, RISK MANAGEMENT, AND COMPLIANCE (GRC)</span>
                                                        <p>Governance, Risk Management, and Compliance or GRC is the umbrella term covering an organization’s approach across these three areas. Being closely related concerns, governance, risk and compliance activities are increasingly being integrated and aligned to some extent in order to avoid conflicts, wasteful overlaps and gaps. While interpreted differently in various organizations, GRC typically encompasses activities such as corporate governance, enterprise risk management (ERM) and corporate compliance with applicable laws and regulations.</p>
                                                        <h5>Governance</h5>
                                                        <p>It describes the overall management approach through which senior executives direct and control the entire organization, using a combination of management information and hierarchical management control structures. Governance activities ensure that critical management information reaching the executive team is sufficiently complete, accurate and timely to enable appropriate management decision making, and provide the control mechanisms to ensure that strategies, directions and instructions from management are carried out systematically and effectively.</p>
                                                        <h5>Risk management</h5>
                                                        <p>It is a set of processes through which management identifies, analyses, and where necessary responds appropriately to risks that might adversely affect realization of the organization’s business objectives. The response to risks typically depends on their perceived gravity, and involves controlling, avoiding, accepting or transferring them to a third party. Whereas organizations routinely manage a wide range of risks (e.g. technological risks, commercial/financial risks, information security risks etc.), external legal and regulatory compliance risks are arguably the key issue in GRC.</p>
                                                        <h5>Compliance</h5>
                                                        <p>At an organizational level, it is achieved through management processes which identify the applicable requirements (defined for example in laws, regulations, contracts, strategies and policies), assess the state of compliance, assess the risks and potential costs of non-compliance against the projected expenses to achieve compliance, and hence prioritize, fund and initiate any corrective actions deemed necessary.</p>
                                                        <div className="image">
                                                            <img src="/img/services/Governance-Risk-and-Compliance1.png" alt="Image" />
                                                        </div> 
                                                        <p>The GRC (Governance, Risk Management, and Compliance) program has been in providing advisory and implementation services to enable our customers to meet their governance, risk management, and compliance objectives. We provide these services to a wide variety of industry verticals, including Banking, Financial Services, Insurance, Government Sector, Hospitality, Education etc. The increasing demand for stringent corporate governance, management accountability, regulatory and compliance requirements have been presenting increasing challenges to the organizations. These have led to urgent and continuing requirement of integrated processes and practices covering governance, risk and compliance (GRC).</p>
                                                        <p>Furthermore, the extensive and growing dependence of business processes on IT has led to increased risks and vulnerabilities. The organizations often have to stretch themselves to comply with the regulations and mitigate risks. The approach has been to provide an integrated GRC solution as the best answer to meet these complex challenges and help them meet the compliance and mitigate risks without adversely affecting the growth of the enterprise.</p>
                                                        <span className="text-secondary">An effective GRC implementation provides several benefits to an organization:</span>
                                                        <ul>
                                                            <li><i className="bx bx-check"></i> Fewer risk and compliance violations with automated monitoring of key indicators</li>
                                                            <li><i className="bx bx-check"></i> Improved visibility across risk initiatives, thresholds, and appetites</li>
                                                            <li><i className="bx bx-check"></i> Reduced unauthorized access risk with centralized monitoring and management</li>
                                                            <li><i className="bx bx-check"></i> Minimized impact and duration of risk events</li>
                                                            <li><i className="bx bx-check"></i> Decreased cost and effort of compliance, risk, and audit programs</li>
                                                            <li><i className="bx bx-check"></i> Flexible and configurable</li>
                                                        </ul>
                                                        <span className="text-secondary">We help you obtain all these benefits through a structured approach to GRC implementation:</span>
                                                        <div className="image">
                                                            <img src="/img/services/flow-chart1.jpg" alt="Image" />
                                                        </div>    
                                                        <p>Our consultants are completely geared to international standards and models like CobIT, ITIL, ISO 27001, OSSTMM, SOX and HIPAA. We offer our assistance in project management, support, guidance and expertise on GRC Consulting as a whole or any specific area like policy development, security implementation, metrics development or security testing.</p>
                                                        <span className="text-secondary">Our Services in the GRC domain are listed below:</span>
                                                        <div className="image">
                                                            <img src="/img/services/flow1.jpg" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="wcu_tab8" className="wcu_tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="choose-us">
                                                        <div className="border-bottom py-4">
                                                            <p>Ashal Tech is an open source consultancy specialized in the development of innovative projects and solutions. We have expertise in a technologies from every layer of the software stack and years of experience contributing to open source projects and communities. We can help your company by providing <b>consultancy, development, training</b> and other forms of <b>collaboration.</b></p>
                                                            <h3>Consultancy</h3>
                                                            <p>Get help from <b>inside the open source community.</b></p>
                                                            <p>No matter what information and communication technologies you are working on, you can <b>take advantage of open source software components</b> and community knowledge.</p>
                                                            <p>Ashal Tech can design <b>your open source strategy,</b> help you make the right technical decisions and facilitate your successful interaction with the community.</p>
                                                        </div>
                                                        <div className="border-bottom py-4">
                                                            <h3>Customization</h3>
                                                            <p>We install, customize and provide support to many popular open source software including Asterisk, Elastix , TrixBox,  osTicket and  OrangeHRM etc.</p>
                                                        </div>
                                                        <div className="border-bottom py-4">
                                                            <h3>System Administration</h3>
                                                            <p>We also manage Linux/Unix servers of our clients. Our team comprises of qualified system administrators. We do installation and configuration of software packages on Linux/Unix servers.</p>
                                                        </div>
                                                        <div className="py-4">
                                                            <h3>Code reviews, security audits and testing</h3>
                                                            <span className="text-secondary">Is your application secure?</span>
                                                            <p>We test your application for various possible attacks and give recommendations to make it secure.</p>
                                                            <span className="text-secondary">Has your application been optimized for performance?</span>
                                                            <p>We make your applications run faster by optimizing the code of your apps.</p>
                                                            <span className="text-secondary">Is the code of your application maintainable?</span>
                                                            <p>We make sure the code is well written, formatted and that there are sufficient comments for fellow developers to understand the code. If required, we create a document describing the way your code functions.</p>
                                                            <span className="text-secondary">Bug fixes</span>
                                                            <p>Should there be any bugs, we either fix them or point you in that direction so you can fix them yourself.</p>
                                                            <span className="text-secondary">Testing</span>
                                                            <p>Testing of features by comparing them against a specifications document.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
