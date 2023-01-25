function toggleMode() {
	const html = document.documentElement
	html.classList.toggle('light')

		// Pegar a tag img
		const img = document.querySelector('#profile img')

		// Substituir a imagem
	 if(html.classList.contains('light')) {
	 	// Se tiver light mode, adicionar a imagem light
		img.setAttribute('src', './assets/avatarlight.png')
		img.setAttribute('alt', 'Imagem de um mascote branco da empresa cinnamorol, com fundo branco. Ele tem olhos azuis, está sorrindo pra você e está corado')
	 } else {
		// Se tiver sem light mode, manter a imagem normal
		img.setAttribute('src', './assets/avatar.png')
		img.setAttribute('alt', 'Foto de um personagem da Studio Ghibli, deitado olhando para cima, imagem escura')
	 }
}

