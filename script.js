const SUPABASE_URL = "https://memlpppcfpmaggtlufrj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbWxwcHBjZnBtYWdndGx1ZnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3OTU2MzMsImV4cCI6MjA2MDM3MTYzM30.7itcjulf7bY1CmJMCid2N-ZBfG7_uMkzZ5LBmTWn6P0";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("myForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const { error } = await supabase.from("contacts").insert([{ name, email }]);

  if (error) {
    document.getElementById("status").innerText = "Error: " + error.message;
  } else {
    document.getElementById("status").innerText = "Data saved!";
    document.getElementById("myForm").reset();
  }
});
