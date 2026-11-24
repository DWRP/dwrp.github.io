# Spec-Driven Development (SDD)

Neste repositório, **SDD** significa: comportamento do produto é definido em markdown versionado em Git (`docs/specs/`), e o código implementa essas specs. Não há MCP ou banco obrigatório.

## Fluxo

1. **Spec** — criar ou atualizar arquivos em `docs/specs/`
2. **Implement** — alterar `src/`, `messages/`, config, etc. alinhado à spec
3. **Verify** — `pnpm lint`, `pnpm build`, checagem manual das seções afetadas

Mudanças cosméticas triviais (typo, formatação) não exigem spec nova. Mudanças de comportamento, contrato de i18n/SEO/deploy ou novas seções **exigem** atualizar a spec no mesmo trabalho.

## Contrato das specs

| Local | Conteúdo |
|-------|----------|
| `docs/specs/product.md` | Visão, objetivos, fora de escopo, critérios de sucesso |
| `docs/specs/modules/*.md` | Responsabilidades, comportamento, restrições, arquivos-chave |
| `docs/specs/README.md` | Índice |

Cada módulo deve responder:

- O que o módulo faz
- Como o usuário/sistema se comporta
- O que não pode ser quebrado
- Onde está no código

Specs descrevem **comportamento esperado**, não tutoriais passo a passo de implementação.

## Quando criar um módulo novo

- Novo domínio com responsabilidades claras (ex.: analytics, formulário de contato)
- Feature que cruza vários arquivos e precisa de critérios de aceite estáveis

## Agentes e humanos

- Entrada para agentes: [`AGENTS.md`](../AGENTS.md)
- Regra Cursor: [`.cursor/rules/sdd.mdc`](../.cursor/rules/sdd.mdc)
- Estrutura do repo: [`project-structure.md`](./project-structure.md)

## Ordem sugerida de leitura

1. `docs/specs/product.md`
2. Módulo(s) em `docs/specs/modules/` relacionados à tarefa
3. Código listado em “Arquivos-chave”
4. Implementar + verificar
