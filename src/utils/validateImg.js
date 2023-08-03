class ValidateImg {

    async isImgURLValid(path) {

        return new Promise((resolve, reject) => {
            const img = document.createElement("img")
            img.src = path
            img.onload = resolve
            img.onerror = reject
            
        })
        .then(() => true)
        .catch(() => false)
	}
}

export const validateImg = new ValidateImg()