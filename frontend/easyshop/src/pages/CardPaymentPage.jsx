import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const cardBrands = {
  visa: { pattern: /^4/, label: "VISA", color: "#1a1f71" },
  mastercard: { pattern: /^5[1-5]/, label: "MC", color: "#eb001b" },
  amex: { pattern: /^3[47]/, label: "AMEX", color: "#007bc1" },
  rupay: { pattern: /^6[0-9]/, label: "RuPay", color: "#006400" },
};

function detectBrand(num) {
  const clean = num.replace(/\s/g, "");
  for (const [key, brand] of Object.entries(cardBrands)) {
    if (brand.pattern.test(clean)) return key;
  }
  return null;
}

function formatCardNum(val) {
  const clean = val.replace(/\D/g, "").slice(0, 16);
  return clean.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(val) {
  const clean = val.replace(/\D/g, "").slice(0, 4);
  return clean.length > 2 ? clean.slice(0, 2) + "/" + clean.slice(2) : clean;
}

function CardFace({ number, name, expiry, cvv, flipped }) {
  const brand = detectBrand(number);
  const displayNum = number
    .replace(/\s/g, "")
    .padEnd(16, "•")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  return (
    <div
      style={{
        perspective: "1000px",
        width: "100%",
        maxWidth: 340,
        margin: "0 auto 28px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56%",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 16,
            overflow: "hidden",
            background:
              brand === "visa"
                ? "linear-gradient(135deg,#8B0000 0%,#3d0000 100%)"
                : brand === "mastercard"
                  ? "linear-gradient(135deg,#8B0000 0%,#2a0a0a 100%)"
                  : "linear-gradient(135deg,#8B0000 0%,#4a0000 100%)",
            padding: "18px 22px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 36,
                height: 26,
                background: "#d4a017",
                borderRadius: 4,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                padding: 3,
                boxSizing: "border-box",
              }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{ background: "#b8860b", borderRadius: 1 }}
                />
              ))}
            </div>
            {brand && (
              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: "Georgia, serif",
                  opacity: 0.9,
                }}
              >
                {cardBrands[brand].label}
              </span>
            )}
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                color: "white",
                fontSize: 18,
                letterSpacing: 3,
                marginBottom: 14,
                textShadow: "0 1px 2px rgba(0,0,0,0.4)",
              }}
            >
              {displayNum}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 9,
                    marginBottom: 2,
                    letterSpacing: 1,
                  }}
                >
                  CARD HOLDER
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {name || "YOUR NAME"}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 9,
                    marginBottom: 2,
                    letterSpacing: 1,
                  }}
                >
                  EXPIRES
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 13,
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {expiry || "MM/YY"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 16,
            overflow: "hidden",
            background: "linear-gradient(135deg,#8B0000 0%,#3d0000 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{ background: "#1a1a1a", height: 38, margin: "0 0 18px" }}
          />
          <div
            style={{
              padding: "0 22px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.15)",
                height: 34,
                borderRadius: 4,
              }}
            />
            <div
              style={{
                background: "white",
                padding: "6px 14px",
                borderRadius: 4,
                fontFamily: "'Courier New', monospace",
                fontSize: 15,
                letterSpacing: 2,
                color: "#333",
                minWidth: 52,
                textAlign: "center",
              }}
            >
              {cvv ? cvv.replace(/./g, "•") : "•••"}
            </div>
          </div>
          <div style={{ textAlign: "right", padding: "8px 22px 0" }}>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10 }}>
              CVV
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.total || 1299;
  const items = location.state?.items || [];
  const form = location.state?.form || {};

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const update = (field, val) => {
    setCard((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (card.number.replace(/\s/g, "").length < 16)
      e.number = "Enter valid 16-digit card number";
    if (!card.name.trim()) e.name = "Name is required";
    const [mm, yy] = (card.expiry || "").split("/");
    if (!mm || !yy || +mm > 12 || +mm < 1 || card.expiry.length < 5)
      e.expiry = "Enter valid expiry date";
    if (card.cvv.length < 3) e.cvv = "Enter valid CVV";
    return e;
  };

const handlePay = async () => {
  const e = validate();

  if (Object.keys(e).length) {
    setErrors(e);
    return;
  }

  try {
    setLoading(true);

    // 1. Create Order
    const orderResponse = await axios.post(
      "http://localhost:8083/orders",
      {
        productId: 1, // temporary
        quantity: 1,
        amount: amount,
        status: "CREATED"
      }
    );

    const orderId = orderResponse.data.id;

    // 2. Create Payment
    const paymentResponse = await axios.post(
      "http://localhost:8084/payments",
      {
        orderId: orderId,
        amount: amount,
        paymentMethod: "CARD",
        paymentStatus: "SUCCESS"
      }
    );

    setLoading(false);

    navigate("/success", {
      state: {
        ...paymentResponse.data,
        amount: amount
      }
    });

  } catch (error) {
    console.log(error);
    setLoading(false);
  }
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
            <h1 style={styles.title}>Card details</h1>
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

        {/* Live Card Preview */}
        <CardFace
          number={card.number}
          name={card.name}
          expiry={card.expiry}
          cvv={card.cvv}
          flipped={focused === "cvv"}
        />

        {/* Form */}
        <div style={styles.form}>
          <Field
            label="Card number"
            error={errors.number}
            active={focused === "number"}
          >
            <input
              style={fieldInput(errors.number)}
              value={card.number}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              onChange={(e) => update("number", formatCardNum(e.target.value))}
              onFocus={() => setFocused("number")}
              onBlur={() => setFocused(null)}
              inputMode="numeric"
            />
          </Field>

          <Field
            label="Name on card"
            error={errors.name}
            active={focused === "name"}
          >
            <input
              style={fieldInput(errors.name)}
              value={card.name}
              placeholder="As printed on card"
              onChange={(e) => update("name", e.target.value)}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </Field>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Field
              label="Expiry"
              error={errors.expiry}
              active={focused === "expiry"}
            >
              <input
                style={fieldInput(errors.expiry)}
                value={card.expiry}
                placeholder="MM/YY"
                maxLength={5}
                onChange={(e) => update("expiry", formatExpiry(e.target.value))}
                onFocus={() => setFocused("expiry")}
                onBlur={() => setFocused(null)}
                inputMode="numeric"
              />
            </Field>
            <Field label="CVV" error={errors.cvv} active={focused === "cvv"}>
              <input
                style={fieldInput(errors.cvv)}
                type="password"
                value={card.cvv}
                placeholder="•••"
                maxLength={4}
                onChange={(e) =>
                  update("cvv", e.target.value.replace(/\D/g, ""))
                }
                onFocus={() => setFocused("cvv")}
                onBlur={() => setFocused(null)}
                inputMode="numeric"
              />
            </Field>
          </div>
        </div>

        {/* Pay Button */}
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

        <p style={styles.disclaimer}>
          🔒 Your card details are encrypted and never stored.
        </p>
      </div>
    </div>
  );
}

function Field({ label, error, active, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          color: active ? "#8B0000" : "#666",
          marginBottom: 5,
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ margin: "4px 0 0", fontSize: 11, color: "#c00" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const fieldInput = (hasError) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#c00" : "#ddd"}`,
  fontSize: 14,
  outline: "none",
  background: "#fff",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
});

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
  header: { display: "flex", alignItems: "center", gap: 12, marginBottom: 24 },
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
  form: { marginBottom: 8 },
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
