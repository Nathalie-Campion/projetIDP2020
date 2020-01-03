$(document).ready(function(){
    
    $('#mpperdu').click(function(){     //gestion mot de passe perdu
        $(this).css('display', 'none');
        let perdu = $('.mailperdu').val();
        $('.mailperdu').attr('placeholder', perdu);
        $('.mailperdu').attr('readonly', "");
        $('#suite').append('<div class="form-group"><input name="choix" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Quel est le nom de jeune fille de votre mère ?" readonly="readonly"></div>');
        $('#suite').append('<div class="form-group"><input name="repchoix" type="text" class="form-control" id="exampleFormControlInput1" placeholder="votre réponse"></div>');
        $('#suite').append('<div class="centrer"><button id="newmp" type="button" class="bouton1">valider</button></div>');
    })

    $('#Rdv').click(function(){
        $('main').append('<h2>Rendez-vous</h2>');   
        $('main').append('<label for="exampleFormControlSelect1">1. Choisissez une prestation</label>');
        $('main').append('<div class="container"><div class=row"><div class="col-sm-4><div class="form-group"><select name="ce" class="form-control ce" id="exampleFormControlSelect1 ce"><option value="">--sélectionner--</option><option value="c">coiffure</option><option value="e">esthétique</option></select></div></div></div></div>');
    })

    $('[name="ce"]').change(function(){
        let v = $(this).val();
        console.log(v);
        /*if ($('.ce option[value="c"]').prop('selected', true)){                                                       
            $('main').append('<div class="container"><div class=row"><div class="col-sm-4><div class="form-group"><select id="c" name="c" class="form-control" id="exampleFormControlSelect1"><option value="">--sélectionner une prestation--</option><option value="1">shampoing + brushing</option><option value="2">shampoing + coupe + brushing</option><option value="3">coloration + soin</option><option value="4">permanente</option></select></div></div></div></div>');
        } else {
            $('main').append('<div class="container"><div class=row"><div class="col-sm-4><div class="form-group"><select id="e" name="e" class="form-control" id="exampleFormControlSelect1"><option value="">--sélectionner un soin--</option><option value="1">soin du visage complet</option><option value="2">massage pierres chaudes</option><option value="3">épilation des jambes</option><option value="4">maquillage de jour</option></select></div></div></div></div>');
        }*/

    })
})

