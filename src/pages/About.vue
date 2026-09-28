<script setup>
</script>

<template>
  <div class="container about-page">
    <div class="about-content">
      <h1 class="page-title">About</h1>
      <p class="framing-text">
        This page is a recap of the technical range already demonstrated in Work, not a preview of new claims.
      </p>

      <div class="table-responsive">
        <table class="layer-matrix">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Qubix</th>
              <th>Tassawur</th>
              <th>HeartSync</th>
              <th>Sublingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>Vue</td>
              <td>—</td>
              <td>React Native (UI)</td>
              <td>TS, Shadow DOM</td>
            </tr>
            <tr>
              <td>Backend (hand-built)</td>
              <td>Laravel</td>
              <td>Node/Express, MongoDB, Redis/BullMQ, FSM</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Backend-as-a-Service</td>
              <td>—</td>
              <td>—</td>
              <td>Firebase</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>—</td>
              <td>—</td>
              <td>React Native, real-time sync</td>
              <td>—</td>
            </tr>
            <tr>
              <td>AI/ML</td>
              <td>—</td>
              <td>Groq LLM, SDXL, Wan I2V, CLIP</td>
              <td>—</td>
              <td>Tesseract.js OCR</td>
            </tr>
            <tr>
              <td>DevOps/Infra</td>
              <td>Docker/Caddy</td>
              <td>Modal Labs GPU serverless</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
}

.about-content {
  width: 100%;
  max-width: 1000px;
}

.page-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.framing-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 4rem;
  text-align: center;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.layer-matrix {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.layer-matrix th,
.layer-matrix td {
  padding: 1.25rem;
  border-bottom: 1px solid var(--border-color);
}

.layer-matrix th {
  background-color: var(--bg-cream);
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--text-dark);
}

.layer-matrix td {
  font-size: 0.95rem;
  color: var(--text-dark);
}

.layer-matrix tbody tr:last-child td {
  border-bottom: none;
}
</style>