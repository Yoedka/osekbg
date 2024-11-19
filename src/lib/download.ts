export function downloadBlob(url: string, fileName: string = "osekbg.png"): void {
	const link: HTMLAnchorElement = document.createElement("a");
	link.href = url;
	link.download = fileName;

	link.click();
}