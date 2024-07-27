$(document).ready(function() {
    // Activer les tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Activer la modal et charger les détails de l'animal via AJAX
    $('#animalModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var animalId = button.data('animal');
        var modal = $(this);

        // Effectuer une requête AJAX pour obtenir les détails de l'animal
        $.ajax({
            url: '/api/animal.php', // L'URL de votre API
            method: 'GET',
            data: { id: animalId },
            dataType: 'json',
            success: function(data) {
                // Mettre à jour le contenu de la modal avec les données reçues
                modal.find('.modal-title').text(data.name + ' - ' + data.species);
                modal.find('.modal-body').html(`
                    <p><strong>Description:</strong> ${data.description}</p>
                    <p><strong>État de santé:</strong> ${data.health}</p>
                    <p><strong>Alimentation:</strong> ${data.food}</p>
                    <p><strong>Quantité:</strong> ${data.quantity}</p>
                `);
            },
            error: function(xhr, status, error) {
                console.error("Une erreur s'est produite : " + error);
                modal.find('.modal-body').html('<p>Erreur lors du chargement des données de l\'animal.</p>');
            }
        });
    });
});
