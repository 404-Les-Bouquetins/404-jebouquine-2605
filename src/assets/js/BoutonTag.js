const tags = document.querySelectorAll(".Bouton__tag")
tags.forEach(tag =>
{
    tag.addEventListener('click', () =>
        {
            if(!tag.classList.contains('inactive'))
            {
                if(tag.classList.contains('idle'))
                {
                    tag.classList.add('active');
                    tag.classList.remove('idle');
                }
                else
                {
                    tag.classList.add('idle');
                    tag.classList.remove('active');
                }
            }
        }); 
}
);
