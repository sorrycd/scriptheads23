function handleSubmit() {
    
    var radios = document.getElementsByName('myRadioForm');
    var selectedRadioValue = null;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedRadioValue = radios[i].value;
            break;
        }
    }
    if (!selectedRadioValue) {
        alert("please fill out the fields and state your opinion on fish");
        return;
    }
    document.getElementById('selectedValue').innerHTML = "You think " + selectedRadioValue;

   
    var action = document.getElementById('action').value;
    var clothes = document.getElementById('clothes').value;
    var consumable = document.getElementById('consumable').value;
    var creature = document.getElementById('creature').value;
    var creaturetwo = document.getElementById('creaturetwo').value;
    var weapon = document.getElementById('weapon').value;
    var weapontwo = document.getElementById('weapontwo').value;
    var emotion = document.getElementById('emotion').value;
    var wound = document.getElementById('wound').value;
    var mutation = document.getElementById('mutation').value;

   
    if (!action || !clothes || !consumable || !creature || !creaturetwo || !weapon || !weapontwo || !emotion || !wound || !mutation) {
        alert("please fill out the fields and state your opinion on fish");
        return; 
    }

    
    var story = `<h4>My morning is like anyone else's in the world. I wake up, brush my teeth, ${action}, and put on my ${clothes}. I enjoy a ${consumable} on the balcony, go downstairs, and fight the ${creature} guarding my front door. Whether or not I win determines if I'll be able to go to school today. Sometimes it's easy because it's unarmed; sometimes it's not so easy because it has armed itself with a ${weapon}. I try to wake up at different times to catch it off guard, but it's almost always ready for me. On the best of days, I can sneak up behind it and club it on the head as hard as I can with my ${weapontwo}. This almost always makes it more ${emotion} the next day.
    <br><br>
    It's become commonplace in society nowadays; everyone does it. Dueling the ${creaturetwo} has become small talk between colleagues. We discuss different methods and strategies to ensure that we won't be late for our commitments, and we show off our scars and ${wound} from the previous days. Each one is different; some have sharp teeth, an extra limb, or even ${mutation}. For the most part, they don't intentionally kill their host; they just stop them from getting through the front door. It seems that they simply do this for fun.</h4>`;

    document.getElementById('storyOutput').innerHTML = story;
}

