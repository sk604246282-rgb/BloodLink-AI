// Fictional sample donor dataset for prototype demonstration only
const sampleDonors = [
  { id: "D-101", name: "Aarav Sharma (Sample)", bloodGroup: "O+", zone: "Central Zone", distanceKm: 1.8, available: true, consented: true, responseRate: 0.92, contact: "+91-98255-19701" },
  { id: "D-102", name: "Priya Nair (Sample)", bloodGroup: "O+", zone: "Central Zone", distanceKm: 3.2, available: true, consented: true, responseRate: 0.85, contact: "+91-92530-96542" },
  { id: "D-103", name: "Kabir Singh (Sample)", bloodGroup: "O-", zone: "Central Zone", distanceKm: 2.5, available: true, consented: true, responseRate: 0.95, contact: "+91-91840-97602" },
  { id: "D-104", name: "Meera Patel (Sample)", bloodGroup: "A+", zone: "North Zone", distanceKm: 4.1, available: true, consented: true, responseRate: 0.88, contact: "+91-97363-68104" },
  { id: "D-105", name: "Devansh Verma (Sample)", bloodGroup: "B+", zone: "South Zone", distanceKm: 2.9, available: true, consented: true, responseRate: 0.80, contact: "+91-92386-18645" },
  { id: "D-106", name: "Ananya Das (Sample)", bloodGroup: "O+", zone: "East Zone", distanceKm: 6.4, available: true, consented: true, responseRate: 0.78, contact: "+91-99653-97456" },
  { id: "D-107", name: "Ritesh Kulkarni (Sample)", bloodGroup: "AB+", zone: "Central Zone", distanceKm: 2.1, available: true, consented: true, responseRate: 0.90, contact: "+91-98978-81256" },
  { id: "D-108", name: "Neha Gupta (Sample)", bloodGroup: "A-", zone: "North Zone", distanceKm: 5.0, available: true, consented: true, responseRate: 0.84, contact: "+91-91601-17488" },
  { id: "D-109", name: "Siddharth Rao (Sample)", bloodGroup: "B-", zone: "East Zone", distanceKm: 3.7, available: true, consented: true, responseRate: 0.87, contact: "+91-91845-65109" },
  { id: "D-110", name: "Kavya Menon (Sample)", bloodGroup: "AB-", zone: "South Zone", distanceKm: 4.6, available: true, consented: true, responseRate: 0.91, contact: "+91-92356-26410" }
];

let activeMatches = [];

function logAudit(message) {
  const list = document.getElementById("auditLog");
  const item = document.createElement("li");
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  item.textContent = `[${time}] ${message}`;
  list.prepend(item);
}

// Compute transparent priority score based on zone match, proximity, and historical responsiveness
function computePriorityScore(donor, targetZone) {
  const zoneBonus = donor.zone === targetZone ? 35 : 10;
  const distanceScore = Math.max(5, 40 - donor.distanceKm * 4);
  const reliabilityScore = Math.round(donor.responseRate * 25);
  return Math.min(100, Math.round(zoneBonus + distanceScore + reliabilityScore));
}

function updateStats() {
  const matched = activeMatches.length;
  const pending = activeMatches.filter(d => d.status === "Pending").length;
  const accepted = activeMatches.filter(d => d.status === "Accepted").length;
  const directed = activeMatches.filter(d => d.status === "Directed").length;

  document.getElementById("statMatched").textContent = matched;
  document.getElementById("statPending").textContent = pending;
  document.getElementById("statAccepted").textContent = accepted;
  document.getElementById("statReferred").textContent = directed;
}

function renderMatches() {
  const container = document.getElementById("donorList");
  updateStats();

  if (activeMatches.length === 0) {
    container.innerHTML = `<p class="empty-state">No consented sample volunteers matched this blood group. Register a sample volunteer on the left to test.</p>`;
    return;
  }

  container.innerHTML = activeMatches.map((donor, idx) => `
    <div class="donor-card">
      <div class="donor-info">
        <h3>${donor.name} • <strong>${donor.bloodGroup}</strong></h3>
        <div class="donor-meta">
          <span class="score-pill">Priority Score: ${donor.priorityScore}/100</span>
          ${donor.zone} (${donor.distanceKm} km) • ${donor.contact}
        </div>
        <div class="donor-meta" style="margin-top:6px;">
          Status: <span class="status-pill status-${donor.status}">${donor.status === "Directed" ? "Directed to Licensed Centre" : donor.status}</span>
        </div>
      </div>
      <div class="actions">
        <button class="btn-sm btn-accept" onclick="updateDonorStatus(${idx}, 'Accepted')">Accept</button>
        <button class="btn-sm btn-decline" onclick="updateDonorStatus(${idx}, 'Declined')">Decline</button>
        <button class="btn-sm btn-centre" onclick="updateDonorStatus(${idx}, 'Directed')">Direct to Centre</button>
      </div>
    </div>
  `).join("");
}

window.updateDonorStatus = function(index, newStatus) {
  const donor = activeMatches[index];
  if (!donor) return;
  donor.status = newStatus;
  if (newStatus === "Directed") {
    logAudit(`${donor.name} (${donor.bloodGroup}) directed to licensed blood centre for mandatory screening & compatibility check.`);
  } else {
    logAudit(`Response updated: ${donor.name} marked as ${newStatus}.`);
  }
  renderMatches();
};

document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const hospital = document.getElementById("hospitalName").value.trim();
  const bloodGroup = document.getElementById("bloodGroup").value;
  const component = document.getElementById("component").value;
  const units = document.getElementById("units").value;
  const urgency = document.getElementById("urgency").value;
  const zone = document.getElementById("locationZone").value;

  document.getElementById("activeRequestTag").textContent = `${bloodGroup} • ${units} Unit(s) • ${urgency}`;

  // Filter strictly by consented + available + recorded blood group match
  activeMatches = sampleDonors
    .filter(d => d.consented && d.available && d.bloodGroup === bloodGroup)
    .map(d => ({
      ...d,
      priorityScore: computePriorityScore(d, zone),
      status: "Pending"
    }))
    .sort((a, b) => b.priorityScore - a.priorityScore);

  logAudit(`Request created by ${hospital}: ${units} unit(s) of ${bloodGroup} (${component}) in ${zone}. Found ${activeMatches.length} consented contact(s).`);
  renderMatches();
});

document.getElementById("donorForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("donorName").value.trim();
  const bloodGroup = document.getElementById("donorBloodGroup").value;
  const zone = document.getElementById("donorZone").value;
  const distanceKm = parseFloat(document.getElementById("donorDistance").value);
  const consented = document.getElementById("donorConsent").checked;

  if (!consented) return;

  const newDonor = {
    id: `D-${100 + sampleDonors.length + 1}`,
    name: `${name} (Sample)`,
    bloodGroup,
    zone,
    distanceKm,
    available: true,
    consented: true,
    responseRate: 0.90,
    contact: "+91-92671-26199"
  };

  sampleDonors.push(newDonor);
  logAudit(`New sample volunteer added with consent: ${newDonor.name} (${bloodGroup}, ${zone}).`);
  this.reset();
  document.getElementById("donorConsent").checked = true;
});
