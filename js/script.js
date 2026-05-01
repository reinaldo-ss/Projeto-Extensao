// ── Navegação entre páginas ──
function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('ativo'));
  // Adiciona a classe 'ativa' à página com o ID especificado para mostrá-la
const btnInicio = document.getElementById('btn-inicio');
if (btnInicio) btnInicio.classList.add('ativo');
  // Encontra o botão correspondente (ex: 'btn-inicio' para id='inicio') e o marca como ativo
  const btn = document.getElementById('btn-' + id);
  if (btn) btn.classList.add('ativo');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Função que gera QR Code a partir de um link do Google Forms ──
function gerarQR() {
  // Obtém o valor do input e remove espaços em branco
  const link = document.getElementById('input-forms').value.trim();
  // Valida se o link existe e começa com 'http' (para links válidos)
  if (!link || !link.startsWith('http')) {
    alert('Por favor, cole um link válido do Google Forms (começa com https://)');
    return;
  }

  // Codifica o link para uso seguro na URL da API
  const encoded = encodeURIComponent(link);
  // Constrói a URL da API do QR Server com parâmetros personalizados
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}&bgcolor=ffffff&color=0a0f0a&margin=10`;

  // Define a fonte da imagem do QR e a torna visível
  const img = document.getElementById('qr-gerado');
  img.src = qrUrl;
  img.style.display = 'block';

  // Define o href e o texto do link direto para o formulário
  document.getElementById('qr-link-direto').href = link;
  document.getElementById('qr-link-direto').textContent = link;

  // Mostra o wrapper do QR e esconde o placeholder padrão
  document.getElementById('qr-wrapper').style.display = 'flex';
  document.getElementById('qr-placeholder-default').style.display = 'none';
}

// ── Inicialização ao carregar a página ──
// Esta linha executa automaticamente quando o script é carregado,
// marcando o botão 'inicio' como ativo para indicar que a página inicial está selecionada.
document.getElementById('btn-inicio').classList.add('ativo');