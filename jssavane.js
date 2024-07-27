$(document).ready(function() {
    $('#animalModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var animal = button.data('animal');
        var modal = $(this);

        // Ici, vous devriez normalement faire une requête AJAX pour obtenir les détails de l'animal
        // Pour cet exemple, nous utiliserons des données statiques
        var animalDetails = {
            'Simba': {
                name: 'Simba',
                species: 'Lion d\'Afrique',
                description: 'Simba est notre majestueux lion mâle. Il est le roi de notre savane et adore se prélasser au soleil.',
                health: 'Excellent',
                food: 'Viande fraîche',
                quantity: '5 kg par jour'
            },
            'Melman': {
                name: 'Melman',
                species: 'Girafe de Rothschild',
                description: 'Melman est notre girafe la plus grande. Elle est très curieuse et aime observer les visiteurs.',
                health: 'Bon',
                food: 'Feuilles d\'acacia',
                quantity: '34 kg par jour'
            },
            'Marty': {
                name: 'Marty',
                species: 'Zèbre des plaines',
                description: 'Marty est un zèbre très énergique. Il aime courir dans la savane et jouer avec ses compagnons.',
                health: 'Excellent',
                food: 'Herbe et foin',
                quantity: '12 kg par jour'
            }
        };

        var details = animalDetails[animal];

        modal.find('.modal-title').text(details.name + ' - ' + details.species);
        modal.find('.modal-body').html(`
            <p><strong>Description:</strong> ${details.description}</p>
            <p><strong>État de santé:</strong> ${details.health}</p>
            <p><strong>Alimentation:</strong> ${details.food}</p>
            <p><strong>Quantité:</strong> ${details.quantity}</p>
        `);
    });
});
