import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Chat AI belum dikonfigurasi. Buat GROQ_API_KEY di .env.local menggunakan API key baru dari Groq Console." }, { status: 503 });
  try {
    const body = await req.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const safeMessages = messages.filter((m: {role?: string; content?: string}) => ["user", "assistant"].includes(m?.role || "") && typeof m?.content === "string").slice(-12).map((m: {role: "user"|"assistant";content:string}) => ({role:m.role,content:m.content.slice(0,3000)}));
    if (!safeMessages.length) return NextResponse.json({error:"Masukkan pertanyaan terlebih dahulu."},{status:400});
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST", headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile", temperature: 0.4, max_tokens: 800, messages: [{role:"system",content:"Kamu adalah METEORA AI, asisten berbahasa Indonesia untuk stasiun cuaca portabel AIoT. Jelaskan suhu, kelembapan relatif, kecepatan angin, GPS, instrumentasi, dan analisis data dengan jelas. Jangan mengaku mengetahui data sensor live atau lokasi aktual kecuali data itu diberikan dalam percakapan. Bedakan fakta, simulasi, dan prediksi. Parameter METEORA saat ini dapat berupa data dummy yang berubah berkala, bukan sensor live. Jangan mengklaim model AI cuaca METEORA telah terlatih jika belum ada bukti."}, ...safeMessages] })
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({error: data?.error?.message || "Groq mengembalikan error. Periksa API key, model, dan limit akun."},{status:response.status===429?429:502});
    const reply = data?.choices?.[0]?.message?.content;
    if (typeof reply !== "string" || !reply.trim()) return NextResponse.json({error:"AI tidak mengembalikan jawaban."},{status:502});
    return NextResponse.json({reply:reply.trim()});
  } catch { return NextResponse.json({error:"Permintaan AI gagal diproses. Coba lagi sebentar."},{status:500}); }
}
