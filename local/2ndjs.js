function switchSheet(sheetNumber) {
    document.querySelectorAll('.tab').forEach((tab, index) => {
        tab.classList.toggle('active', index === sheetNumber - 1);
    });

    document.querySelectorAll('.sheet').forEach((sheet, index) => {
        sheet.classList.toggle('active', index === sheetNumber - 1);
    });
}