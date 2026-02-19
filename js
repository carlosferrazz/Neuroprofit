const supabaseClient = supabase.createClient(
  "SUA_URL_DO_SUPABASE",
  "SUA_ANON_KEY_DO_SUPABASE"
);

let isLogin = true;

// Alternar Login/Cadastro
function toggleAuth(){
  isLogin = !isLogin;
  document.getElementById("authTitle").innerText = isLogin ? "Login" : "Criar Conta";
  document.querySelector("button").innerText = isLogin ? "Entrar" : "Criar Conta";
  document.getElementById("toggleText").innerText = isLogin ? "Não tem conta?" : "Já tem conta?";
}

// Login / Cadastro
async function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const authMessage = document.getElementById("authMessage");

  if(isLogin){
    const { error } = await supabaseClient.auth.signInWithPassword({email,password});
    if(error) return authMessage.innerText = error.message;
  } else {
    const { error } = await supabaseClient.auth.signUp({email,password});
    if(error) return authMessage.innerText = error.message;
  }
  startApp();
}

// Inicializar app
async function startApp(){
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

// Logout
async function logout(){
  await supabaseClient.auth.signOut();
  location.reload();
}

// Alternar páginas
function openPage(page){
  document.querySelectorAll(".content > div").forEach(el=>el.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
}

// Auto-login
document.addEventListener("DOMContentLoaded", async()=>{
  const { data:{user} } = await supabaseClient.auth.getUser();
  if(user) startApp();
});
