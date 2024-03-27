import { useState } from 'react'

function Home() {
    return (
        <>
            <h1>Bem vindo ao meu Portifólio</h1>
            <h2>Meu nome é Larissa</h2>

            <section>
                <img src=""  alt="Foto de perfil" />
                <div>
                    <h2>Sobre Mim</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec diam at magna imperdiet varius sit amet vel mauris. Pellentesque vulputate placerat augue, eget convallis ipsum ullamcorper vel. Morbi ante ante, consequat ac turpis eget, vulputate iaculis nulla. Fusce vitae arcu vulputate, ultricies erat dictum, placerat diam. Nam nec ex purus. Suspendisse hendrerit semper justo, vel finibus sem fermentum eu. Nam arcu nibh, egestas nec congue quis, ultrices eget urna. Cras a molestie magna. Aliquam maximus efficitur enim, a aliquet dui gravida ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam fringilla nisl condimentum, imperdiet ex vitae, interdum lectus. Donec id ipsum nunc. Aliquam vel quam ipsum. Donec porta, tellus in dignissim pellentesque, erat libero congue nibh, vitae venenatis ligula magna eget tellus. Duis eros arcu, ullamcorper non faucibus sed, viverra a dui. Nunc id ligula luctus, aliquam felis a, sollicitudin arcu.

                    Mauris eget consectetur risus. Integer semper hendrerit tristique. Curabitur quam urna, convallis in euismod placerat, facilisis hendrerit tortor. Sed feugiat efficitur erat. Mauris suscipit tempus faucibus. Donec tempor nisl mattis, tincidunt sapien et, tincidunt felis. Fusce ac consequat ligula. Fusce lobortis felis ut risus rhoncus, a pellentesque velit accumsan. Pellentesque sed dolor turpis. Nulla nibh leo, volutpat ut fermentum sit amet, malesuada eget mauris. Donec ac aliquam ex, tristique molestie turpis. Donec bibendum sed augue id mattis. Duis sagittis eros vel leo tristique, a aliquet urna egestas.
                    </p>
                </div>
            </section>
            <section>
                <h2>Meus Projetos</h2>
                <div>
                   <div>
                        <h3>{props.nomeprojeto}</h3>
                        <p>{props.descricao}</p>
                   </div>
                </div>
            </section>
        
        
        
        </>
    )
}

export default Home