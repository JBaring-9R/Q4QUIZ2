// AVERAGE = (Subject1) + (Subject 2) + (Subject 3)

function getRating() {
    // Get values from input fields and convert them to numbers
    var sub1 = parseFloat(document.getElementById('mathGrade').value);
    var sub2 = parseFloat(document.getElementById('englishGrade').value);
    var sub3 = parseFloat(document.getElementById('socialstudiesGrade').value);

    // this is to check if subject grade isn't a valid number (NaN)
    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        alert("˗ˏˋ★ ᴘʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ᴠᴀʟɪᴅ ɢʀᴀᴅᴇꜱ ꜰᴏʀ ᴀʟʟ ꜱᴜʙᴊᴇᴄᴛꜱ. ★ ˎˊ˗");
        return;
    }

    // to calculate the avg:
    var ave = (sub1 + sub2 + sub3) / 3;

    // Determine the rating based on the average
    var rating = "";

    if (ave >= 94 && ave <= 100) {
        rating = "ᴇxᴄᴇʟʟᴇɴᴛ ⁺˖ ⸝⸝𓊇";
    } else if (ave >= 87 && ave < 94) {
        rating = "ᴀʙᴏᴠᴇ ꜱᴀᴛɪꜱꜰᴀᴄᴛᴏʀʏ ⁺˖ ⸝⸝𓊇";
    } else if (ave >= 80 && ave < 87) {
        rating = "ꜱᴀᴛɪꜱꜰᴀᴄᴛᴏʀʏ ⁺˖ ⸝⸝𓊇";
    } else if (ave >= 75 && ave < 80) {
        rating = "ɴᴇᴇᴅꜱ ɪᴍᴘʀᴏᴠᴇᴍᴇɴᴛ ⁺˖ ⸝⸝𓊇";
    } else if (ave >= 70 && ave < 75) {
        rating = "ᴘᴏᴏʀ ⁺˖ ⸝⸝𓊇";
    } else {
        rating = "ꜰᴀɪʟɪɴɢ ⁺˖ ⸝⸝𓊇"; // For averages below 70
    }

    // Display the average and rating using an alert
    alert("⪩•⪨ ᴀᴠᴇʀᴀɢᴇ: " + ave.toFixed(2) + "\n𓊆⸝⸝ ˖⁺ ʀᴀᴛɪɴɢ: " + rating);
}