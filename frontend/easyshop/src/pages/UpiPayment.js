import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpiPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.total || 1299;
  const items = location.state?.items || [];
  const form = location.state?.form || {};

  const [upiId, setUpiId] = useState("");
  const [upiError, setUpiError] = useState("");
  const [activeTab, setActiveTab] = useState("qr");
  const [loading, setLoading] = useState(false);

  const validateUpi = (val) => {
    if (!val) return "Please enter UPI ID";
    if (!val.includes("@")) return "Invalid UPI ID (ex: name@oksbi)";
    const [username, bank] = val.split("@");
    if (!username || username.length < 3)
      return "Username too short (min 3 chars)";
    if (!bank || bank.length < 2) return "Invalid bank handle";
    const validBanks = [
      "oksbi",
      "okhdfcbank",
      "okicici",
      "okaxis",
      "ybl",
      "paytm",
      "gpay",
      "apl",
      "ibl",
      "rbl",
      "kotak",
      "naviaxis",
      "freecharge",
      "airtel",
      "jio",
    ];
    if (!validBanks.includes(bank.toLowerCase())) {
      return `Invalid handle. Use: @oksbi, @okhdfcbank, @okicici, @ybl, @paytm, @gpay`;
    }
    return "";
  };

  const handlePay = () => {
    const err = validateUpi(upiId);
    if (err) {
      setUpiError(err);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const order = {
        id: "ORD" + Date.now(),
        items: items,
        total: amount,
        date: new Date().toLocaleDateString(),
        delivery: new Date(
          Date.now() + 3 * 24 * 60 * 60 * 1000,
        ).toLocaleDateString(),
        status: "Pending",
        paymentMethod: "UPI",
        upiId: upiId,
        customerName: form.name || "",
        customerMobile: form.mobile || "",
        customerAddress: form.address || "",
      };
      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.removeItem("cart");
      setLoading(false);
      navigate("/success", { state: order, replace: true });
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <button
            onClick={() => navigate("/checkout")}
            style={styles.backBtn}
            aria-label="Go back"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div>
            <h1 style={styles.title}>UPI Payment</h1>
            <p style={styles.subtitle}>
              Secure payment · ₹{amount.toLocaleString("en-IN")}
            </p>
          </div>
          <div style={styles.secureBadge}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="2.5"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: 11, color: "#2e7d32", fontWeight: 500 }}>
              SSL
            </span>
          </div>
        </div>

        {/* UPI Apps Row */}
        <div style={styles.upiApps}>
          {[
            { name: "GPay", color: "#4285F4" },
            { name: "PhonePe", color: "#5f259f" },
            { name: "Paytm", color: "#00BAF2" },
            { name: "BHIM", color: "#00945f" },
          ].map((app) => (
            <div key={app.name} style={styles.upiApp}>
              <div style={{ ...styles.upiAppIcon, background: app.color }}>
                {app.name[0]}
              </div>
              <span style={styles.upiAppLabel}>{app.name}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === "qr" ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab("qr")}
          >
            📷 Scan QR
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeTab === "id" ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab("id")}
          >
            ⌨️ UPI ID
          </button>
        </div>

        {/* ✅ QR Tab — only QR, no button, no checkbox */}
        {activeTab === "qr" && (
          <div style={styles.qrBox}>
            <svg
              width="190"
              height="190"
              viewBox="0 0 160 160"
              xmlns="http://www.w3.org/2000/svg"
              style={{ borderRadius: 8 }}
            >
              <rect width="160" height="160" fill="white" />
              <g fill="#1a1a1a">
                <rect x="10" y="10" width="50" height="50" rx="4" />
                <rect
                  x="16"
                  y="16"
                  width="38"
                  height="38"
                  fill="white"
                  rx="3"
                />
                <rect x="22" y="22" width="26" height="26" rx="2" />
                <rect x="100" y="10" width="50" height="50" rx="4" />
                <rect
                  x="106"
                  y="16"
                  width="38"
                  height="38"
                  fill="white"
                  rx="3"
                />
                <rect x="112" y="22" width="26" height="26" rx="2" />
                <rect x="10" y="100" width="50" height="50" rx="4" />
                <rect
                  x="16"
                  y="106"
                  width="38"
                  height="38"
                  fill="white"
                  rx="3"
                />
                <rect x="22" y="112" width="26" height="26" rx="2" />
                <rect x="70" y="10" width="8" height="8" />
                <rect x="82" y="10" width="8" height="8" />
                <rect x="70" y="22" width="8" height="8" />
                <rect x="82" y="22" width="8" height="8" />
                <rect x="70" y="70" width="8" height="8" />
                <rect x="82" y="70" width="8" height="8" />
                <rect x="70" y="82" width="8" height="8" />
                <rect x="82" y="82" width="8" height="8" />
                <rect x="100" y="70" width="8" height="8" />
                <rect x="112" y="70" width="8" height="8" />
                <rect x="124" y="70" width="8" height="8" />
                <rect x="136" y="70" width="8" height="8" />
                <rect x="100" y="82" width="8" height="8" />
                <rect x="124" y="82" width="8" height="8" />
                <rect x="100" y="94" width="8" height="8" />
                <rect x="112" y="94" width="8" height="8" />
                <rect x="136" y="94" width="8" height="8" />
                <rect x="100" y="106" width="8" height="8" />
                <rect x="124" y="106" width="8" height="8" />
                <rect x="100" y="118" width="8" height="8" />
                <rect x="112" y="118" width="8" height="8" />
                <rect x="136" y="118" width="8" height="8" />
                <rect x="100" y="130" width="8" height="8" />
                <rect x="124" y="130" width="8" height="8" />
                <rect x="70" y="94" width="8" height="8" />
                <rect x="82" y="94" width="8" height="8" />
                <rect x="70" y="106" width="8" height="8" />
                <rect x="82" y="118" width="8" height="8" />
                <rect x="70" y="130" width="8" height="8" />
                <rect x="10" y="70" width="8" height="8" />
                <rect x="22" y="70" width="8" height="8" />
                <rect x="34" y="70" width="8" height="8" />
                <rect x="46" y="70" width="8" height="8" />
                <rect x="10" y="82" width="8" height="8" />
                <rect x="34" y="82" width="8" height="8" />
                <rect x="10" y="94" width="8" height="8" />
                <rect x="22" y="94" width="8" height="8" />
                <rect x="46" y="94" width="8" height="8" />
                <rect x="34" y="106" width="8" height="8" />
                <rect x="10" y="118" width="8" height="8" />
                <rect x="46" y="118" width="8" height="8" />
                <rect x="22" y="130" width="8" height="8" />
                <rect x="34" y="130" width="8" height="8" />
              </g>
            </svg>
            <p style={styles.qrLabel}>Scan with any UPI app to pay</p>
            <p style={styles.qrAmount}>₹{amount.toLocaleString("en-IN")}</p>
            <p style={styles.waitingText}>
              ⏳ Waiting for payment confirmation...
            </p>
          </div>
        )}

        {/* ✅ UPI ID Tab — input + pay button */}
        {activeTab === "id" && (
          <div style={styles.upiIdBox}>
            <label style={styles.label}>Enter UPI ID</label>
            <input
              style={{
                ...styles.input,
                border: `1px solid ${upiError ? "#c00" : "#ddd"}`,
              }}
              type="text"
              placeholder="yourname@oksbi"
              value={upiId}
              onChange={(e) => {
                setUpiId(e.target.value);
                setUpiError("");
              }}
            />
            {upiError && <p style={styles.errText}>{upiError}</p>}
            <p style={styles.upiHint}>
              ✅ Valid: @oksbi, @okhdfcbank, @okicici, @ybl, @paytm, @gpay
            </p>

            {/* Pay button only on UPI ID tab */}
            <button
              onClick={handlePay}
              disabled={loading}
              style={{
                ...styles.payBtn,
                opacity: loading ? 0.8 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
                  <span style={styles.spinner} /> Processing...
                </span>
              ) : (
                `Pay ₹${amount.toLocaleString("en-IN")}`
              )}
            </button>
          </div>
        )}

        <p style={styles.disclaimer}>
          🔒 Your payment is 100% secure and encrypted.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5ede8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    boxSizing: "border-box",
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    padding: "24px 24px 20px",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 4px 24px rgba(139,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
  },
  header: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
  backBtn: {
    background: "none",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    width: 36,
    height: 36,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#444",
    flexShrink: 0,
  },
  title: { margin: 0, fontSize: 18, fontWeight: 600, color: "#1a1a1a" },
  subtitle: { margin: "2px 0 0", fontSize: 12, color: "#888" },
  secureBadge: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: 4,
    background: "#e8f5e9",
    padding: "4px 8px",
    borderRadius: 6,
  },
  upiApps: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20,
    background: "#fafafa",
    borderRadius: 12,
    padding: "12px 8px",
    border: "1px solid #f0f0f0",
  },
  upiApp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  upiAppIcon: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
  upiAppLabel: { fontSize: 11, color: "#555" },
  tabs: {
    display: "flex",
    gap: 0,
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    border: "1px solid #e0e0e0",
  },
  tab: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#f5f5f5",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    color: "#666",
    transition: "0.2s",
  },
  tabActive: { background: "#8B0000", color: "white" },
  qrBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 16px",
    background: "#fafafa",
    borderRadius: 12,
    marginBottom: 16,
    border: "1px solid #f0f0f0",
  },
  qrLabel: {
    margin: "12px 0 4px",
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
  qrAmount: {
    margin: "0 0 8px",
    fontSize: 20,
    fontWeight: 700,
    color: "#8B0000",
  },
  waitingText: { fontSize: 12, color: "#888", margin: "4px 0 0" },
  upiIdBox: { marginBottom: 16 },
  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 500,
    color: "#666",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 14,
    outline: "none",
    background: "#fff",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  },
  errText: { margin: "4px 0 0", fontSize: 11, color: "#c00" },
  upiHint: { margin: "6px 0 12px", fontSize: 11, color: "#888" },
  payBtn: {
    width: "100%",
    padding: "14px",
    background: "#8B0000",
    color: "white",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
    letterSpacing: 0.3,
  },
  disclaimer: {
    textAlign: "center",
    fontSize: 11,
    color: "#aaa",
    margin: "12px 0 0",
  },
  spinner: {
    display: "inline-block",
    width: 16,
    height: 16,
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "white",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
};